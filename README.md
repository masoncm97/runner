# Hello world example for CI/CD

from here

```bash
# terminal window 1
docker build --tag hello .
docker run -p 8000:8000 hello:latest

# terminal window 2
curl localhost:8000
Hello world%
```
