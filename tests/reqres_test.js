Feature('Reqres.in API');

Scenario('GET single user', async ({ I }) => {
  const res = await I.sendGetRequest('/users/2');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['data']);
  I.seeResponseContainsJson({
    data: {
      id: 2,
      email: 'janet.weaver@reqres.in'
    }
  });
});
