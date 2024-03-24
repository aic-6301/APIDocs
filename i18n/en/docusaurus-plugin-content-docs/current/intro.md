---
sidebar_position: 0
---

# Basic

APIへのリクエストパスは以下の通りです。

```
https://api.munesky.net/v1/
```

# Response Format

Basically, the following responses are returned

```
{
  message : "Basically, it is returned as a string.",
  data : {
    Data(Get Only)
  }  
}
```

# ステータス

Basically, it is determined by `HTTP StatusCode`.

| コード | 状態 | 詳細 |
| ---- | ---- | ----| 
| 200 | Success | |
| 404 | Failed | Not Found |
| 400 | Failed | Already exists |
| 502 | Failed | Server Error |
