import superAgent from 'superagent';
// get the sections from the course
const getUsers = async () => {
    const queryArguments = {
        page: '2'
    }
    let response = await superAgent.get('https://reqres.in/api/users').query(queryArguments)
    return response.body;
};

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}

export { getUsers, wrapAsync };
