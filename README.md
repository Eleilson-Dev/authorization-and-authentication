# 10-Praticando-Autenticação

## rota de criacao de usuarios

### Create User - (STATUS 201) - (http:method POST) - URL - /users/create/user

Padrao de corpo

```json
{
  "name": "maria",
  "email": "maria@gmail.com",
  "password": "12345678"
}
```

Padrao de resposta

```json
{
  "id": 4,
  "name": "maria",
  "email": "maria@gmail.com",
  "password": "$2a$10$54wTBGwsRngHhCNQ.JDbBe7cUOSF0NLOYwpgUJcQL6lhUpRYEh7GW"
}
```

### Login User - (STATUS 200) - (http:method POST) - URL - /users/login/user

Padrao de corpo

```json
{
  "email": "maria@gmail.com",
  "password": "12345678"
}
```

Padrao de resposta

```json
{
  "user": {
    "name": "maria",
    "email": "maria@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzIzNDIxNDM0LCJleHAiOjE3MjM1MDc4MzR9.JfmWh056CEQIZFFUOtACRw-76Y5v7YjDpn9SvhEfEM0"
}
```

### Find User - (STATUS 200) - (http:method GET) - URL - /users/find/user/:id

Nao requer corpo

Padrao de resposta

```json
{
  "id": 1,
  "name": "Elleylson",
  "email": "elleylson@gmail.com",
  "password": "12345678"
}
```
