Feature('Users API - Not Found');

Scenario('GET user not found (ID 23)', async ({ I }) => {
  const res = await I.sendGetRequest('/users/23');
  I.seeResponseCodeIs(404);
});
