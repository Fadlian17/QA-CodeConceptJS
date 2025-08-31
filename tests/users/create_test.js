Feature('Users API - Create');

Scenario('POST create a new user', async ({ I }) => {
  const payload = { name: 'morpheus', job: 'leader' };
  const res = await I.sendPostRequest('/users', payload);
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['id', 'createdAt']);
});
