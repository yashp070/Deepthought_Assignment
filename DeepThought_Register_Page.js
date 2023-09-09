import{Selector} from "testcafe"
fixture('DeepThought Register Page')
    .page('https://dev.deepthought.education/register');

test('register page test', async t => {
    await t
        .typeText('#email', 'yr60554@gmail.com')
        .typeText('#username', 'yashraj')
        .typeText('#password', 'Jashobanta123@')
        .typeText('#password-confirm', 'Jashobanta123@')
        .click('#register')

    .navigateTo('https://dev.deepthought.education/register/complete?registered=true')
        .wait(3000)
        .click('#gdpr_agree_data')
        .click('#gdpr_agree_email')
        .click(Selector('button').withText('Submit'));
        
});
