Feature('Users API - Detail');

Scenario('GET single user detail', async ({ I }) => {
  const res = await I.sendGetRequest('/users/2');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsJson({
    data: {
      id: 2,
      email: 'janet.weaver@reqres.in'
    }
  });
});
