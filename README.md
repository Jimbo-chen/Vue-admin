# Vue-admin

## API
### 获取所有用户信息
http://localhost:3000/users

### 获取ID为1的用户信息
http://localhost:3000/users/1

### 获取年龄在30-40之间的用户信息
http://localhost:3000/users?age_gte=30&age_lte=40

### 搜索用户名为“hery”的信息
http://localhost:3000/users?q=hery
### 获取所有公司信息
http://localhost:3000/companies

### 获取ID为1的公司信息
http://localhost:3000/companies/1

### 获取ID为1的公司下所有员工的信息
http://localhost:3000/companies/1/users

### 获取apple公司的信息
http://localhost:3000/companies?name=apple

### 获取第一页的两家公司信息
http://localhost:3000/companies?_page=1&_limit=2

### 获取公司信息 根据公司名进行升序排序 asc升序 desc降序
http://localhost:3000/companies?_sort=name&_lorder=asc