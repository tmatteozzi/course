const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
// BOX DATA
const width = window.innerWidth;
const height = window.innerHeight;
const cellsHorizontal = 10;
const cellsVertical = 5;
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;
// BOX CONFIG
const engine = Engine.create();
// DISABLE GRAVITY
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);
// WALLS
const walls = [
    Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];
World.add(world, walls);
// MAZE GENERATION
// ARRAY ELEMENTS POS SHUFFLE 
const shuffle = arr => {
    let counter = arr.length;
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter--;
        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
  };
// GRID
const grid = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal).fill(false));
const verticals = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal - 1).fill(false));
const horizontals = Array(cellsVertical - 1).fill(null).map(() => Array(cellsHorizontal).fill(false));
// START POSITION
const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);
// MAZE CREATION ALGORITHM
const stepThroughCell = (row, column) => {
    // IF CELL AT ROW-COLUMN WAS VISITED RETURN
    if(grid[row][column]){ return; }
    // MARK THE CELL AS VISITED
    grid[row][column] = true;
    // NEIGHBORS LIST (RANDOMLY ORDERED)
    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);
    // FOR EACH NEIGHBOR
    for(let neighbor of neighbors){
        const [nextRow, nextColumn, direction] = neighbor;
        // CHECK IF ITS OUT OF BOUNDS
        if(nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal){
            continue; // SKIP THIS NEIGHBOR AND MOVE TO THE NEXT
        }
        // IF NEIGHBOR WAS VISITED, CONTINUE TO THE NEXT
        if(grid[nextRow][nextColumn]){ continue; }
        // REMOVE WALL
        if(direction === 'left'){
            verticals[row][column - 1] = true;
        } else if(direction === 'right'){
            verticals[row][column] = true;
        } else if(direction === 'up'){
            horizontals[row - 1][column] = true;
        } else if(direction === 'down'){
            horizontals[row][column] = true;
        }
        // RECURSION (VISIT NEXT CELL)
        stepThroughCell(nextRow, nextColumn);
    }
};
stepThroughCell(startRow, startColumn);
// DRAWING SEGMENTS
// HORIZONTAL
horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open){
            return;
        }
        // IF OPEN IS FALSE DRAW A WALL
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2, 
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            5,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'white' 
                } 
            }
        );
        World.add(world, wall);
    });
});
// VERTICAL
verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open){
            return;
        }
        // IF OPEN IS FALSE DRAW A WALL
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX, 
            rowIndex * unitLengthY + unitLengthY / 2,
            5,
            unitLengthY,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'white' 
                } 
            }
        );
        World.add(world, wall);
    });
});
// GOAL
const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * .7,
    unitLengthY * .7,
    {
        label: 'goal',
        isStatic: true,
        render: {
            fillStyle: 'lightgreen' 
        } 
    }
);
World.add(world, goal);
// BALL
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius, 
    {
        label: 'ball',
        render: {
            fillStyle: 'lightblue' 
        } 
    }
);
World.add(world, ball);
// BALL MOVEMENT
document.addEventListener('keydown', event => {
    // BALL CURRENT VELOCITY
    const { x,y } = ball.velocity;
    if(event.code === 'KeyW'){ // W
        Body.setVelocity(ball, { x, y: y - 5 });
    }
    if(event.code === 'KeyD'){ // D
        Body.setVelocity(ball, { x: x + 5, y });
    }
    if(event.code === 'KeyS'){ // S
        Body.setVelocity(ball, { x, y: y + 5 });
    
    }
    if(event.code === 'KeyA'){ // A
        Body.setVelocity(ball, { x: x - 5, y });
    
    }
});
// WIN CONDITION
Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach((collision) => {
        const labels = ['ball', 'goal'];
        if(
            labels.includes(collision.bodyA.label) && 
            labels.includes(collision.bodyB.label)
        ){
            // WIN CONSEQUENCES
            document.querySelector('.winner').classList.remove('hidden');
            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if(body.label === 'wall'){
                    Body.setStatic(body, false);
                }
            });
        }
    });
});