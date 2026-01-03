import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 5, // 5 virtual users
  duration: '10s', // for 10 seconds
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must be under 500ms
  },
};

export default function () {
  const res = http.get('http://localhost:3000/health');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}