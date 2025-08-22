Feature('Reqres API Testing');

Scenario('GET list of users', async ({ I }) => {
  const res = await I.sendGetRequest('/users?page=2');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({ page: 2 });
});

Scenario('POST create a user', async ({ I }) => {
  const payload = {
    name: "morpheus",
    job: "leader"
  };

  const res = await I.sendPostRequest('/users', payload);
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['id', 'name', 'job', 'createdAt']);
});

Scenario('GET single user not found', async ({ I }) => {
  const res = await I.sendGetRequest('/users/23');
  I.seeResponseCodeIs(404);
});
