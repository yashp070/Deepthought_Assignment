import{Selector} from "testcafe"
fixture('DeepThought Login Page')
    .page('https://dev.deepthought.education/login');

test('Test in Firefox', async (t) => {
    await t
        .typeText('#username', 'yr60554@gmail.com')
        .typeText('#password', 'Jashobanta123@')
        .click('#login')
        .expect(Selector('#wrapper').innerText).contains('Welcome to DeepThought');
});

// To run CrossBrowser Testting we have to write the as:-  testcafe "chrome,firefox" DeepThought_CrossBrowser_test.js