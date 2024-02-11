import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'g1s4dj',
            label: 'Can I use React in a project?',
            content:
                'You can use React in any project you want! You can use React in any project you want! You can use React in any project you want!'
        },
        {
            id: 'h531hi',
            label: 'Can I use JavaScript in a project?',
            content:
                'You can use JS in any project you want! You can use JS in any project you want! You can use JS in any project you want!'
        },
        {
            id: 'hs8h3j',
            label: 'Can I use CSS in a project?',
            content:
                'You can use CSS in any project you want! You can use CSS in any project you want! You can use CSS in any project you want!'
        }
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;
