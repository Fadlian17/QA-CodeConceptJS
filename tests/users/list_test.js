Feature('Users API - List');

Scenario('GET list of users (page 2)', async ({ I }) => {
  const res = await I.sendGetRequest('/users?page=2');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({ page: 2 });
});
