import { validationResult } from 'express-validator';

const middlewares = {
    handleErrors(templateFunc, dataCallBack) {
        return async (req, res, next) => {
            const errors = validationResult(req);
            // IF THERE ARE ERRORS CHANGE TEMPLATE TO HANDLE THEM
            if(!errors.isEmpty()){
                let data = {};
                if(dataCallBack){
                    data = await dataCallBack(req);
                }
                return res.send(templateFunc({ errors, ...data }));
            }
            // CALL NEXT IF THERE ARE NO ERRORS (EVERYTHING WORKS OK)
            next();
        };
    },
    requireAuth(req, res, next){
        // IF USER IS NOT LOGGED IN REDIRECT TO SIGN IN
        if(!req.session.userId){
            return res.redirect('/signin');
        }
        // CALL NEXT IF THERE ARE NO ERRORS (EVERYTHING WORKS OK)
        next();
    }
};

export const { handleErrors, requireAuth } = middlewares;