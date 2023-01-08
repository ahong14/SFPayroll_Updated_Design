import time
from locust import HttpUser, task, between


class SFPayrollLoadTest(HttpUser):
    @task
    def get_home_page(self):
        self.client.get('/')