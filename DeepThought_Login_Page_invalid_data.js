import{Selector} from "testcafe"
fixture('DeepThought Login Page')
    .page('https://dev.deepthought.education/login');

test('login page test', async t => {
    await t
        .typeText('#username', 'yr6054@gmail.com')
        .typeText('#password', 'Jashobanta@')
        .click('#login')
        .expect(Selector('#login-error-notify').innerText).contains('Login Unsuccessful');
});
