---
title: 'My Software Design Pattern'
description: 'Let me share with you my favorite pattern and structure I usually use in my codebases.'
author: 'Eden'
date: 2021-10-01
#image: /assets/uploads/math.png
tag: Writing
---

The software design pattern is essential when we start to develop software.
It's about how we structure our codes, how we split our codes into components and modules, what framework we are going to use, etc.
There are a lot of books that have a lot of great patterns we can follow.
However, as a developer, I believe that every one of us has a pattern for ourselves and we like to use it.

My design came from many projects and code bases I have worked with.
From codebases for an embedded device to a web service, I have established a common pattern for all of them.

# The entrypoint should be commands

The final executable file or entry point should support multiple commands and options to do all functions of the software.
For example, let's say a tool that imports and exports a database, it has simple two main functions.
If it was me 4 years ago, I will output two executable files including import and export and I will use this tool as below:

```bash
# use tool_import when I need to import database
tool_import some_database

# use tool_export when I need to export database
tool_export some_database
```

But I'm at present, I will output only an executable file and use it as below:

```bash
# use tool with import command and options
tool import --database some_database --from ./some_databse.backup

# use tool with export command and options
tool export --database some_database --to ./some_databse.backup
```

Good things from the second design are:

- It's easy to add more functions and options (easy to scale).
- It's easy to know what does the tool do (use the help command).

# Put reusable codes into libraries

Many codebases sometime use the same codes and utility functions.
For example, convert time formats, read file content, or print logs in our favorite format.
And I put these pieces of code into separate libraries, then export them, so I can easily import them into other codebases.

The best thing about this design is I can reuse my codes in multiple codebases, prevent duplicated codes, and save time.

# Split external integrations into services

Our software doesn't do everything itself, also integrates with other software as well. I usually write services that do tasks and calls to a specific service.
For example, if my software needs a database, I will build up a service that handles all logic and calls to the database service. I usually name it a database service or storage service.
And with every external software like that, I also write another service too.

This design brings to me some good things:

- It's easy to update or integrate with external services. For example, when we need to update the database library, we just need to update codes in the database service and do tests with it only without retest with the whole codebase.
- It helps me also reuse the codes in multiple codebases.

Furthermore, I usually design my service with the inheritance.
Whenever I need to read from or write to the database, I need to request the database service only.
And on behalf of my call, the database service should be able to handle requests to Postgresql, MongoDB, or whatever database I'm using.
It makes me easy to scale up whenever I need to integrate with another service.

```text

+-----------------+                             +---------------+
|    Somewhere    |  request to read database   |    Database   |
|    in my code   | --------------------------> |    service    |
+-----------------+                             +---------------+
                                                        |
                                +---------------+---------------+
                                |               |               |
                                |               |               |
                         +--------------+  +------------+   +------------+
                         | Easy to      |  | Postgresql |   | MongoDB    |
                         | add more ... |  |            |   |            |
                         +--------------+  +------------+   +------------+
```

# Write main logic in modules

I usually split my software logic into multiple modules, every module does a specific function.
For example, in an e-commerce API service, I will split logic into basic modules as below:

- API routes, initialize web router and API routing.
- Account, handle all logic related to accounts like create, update, login, ...
- Payment, handle all logic about payment, charges, subscriptions, ...

In every module, it can call external services or use utility libraries following my design above.

By split logic into modules, I can:

- Easy to scale my software, when I need to add more functions, I just need to make another module.
- Easy to do tests with software logic in modules one by one.

```text

+-----------------+                        +--------------+
|    Account      |   save account data    |   Database   |
|    module       | ---------------------> |   service    |
+-----------------+   |                    +--------------+
       |              |
       |              | write logs         +--------------+
       |              |------------------> |  Logging     |
+-----------------+                        |  service     |
|  Validation     |                        +--------------|
|  library        |
+-----------------+
```

# Configurations

My favorite config format is `.env` files, or I just directly export them to environment variables.
I don't really have many reasons for this, but I think because I usually deploy my code using Docker or cloud services like Heroku.
So, environment variables are easy to use with these platforms.

# Codebase files structure

As my design, I structure my codebase folders into four main directories:

```text

/
|--cmd          // contains all export commands, and entry points
|--lib,         // contains all external libraries, or utility functions
|--modules,     // contains all external service integration logic
|--services,    // contains the software logic

```

This pattern is just my personal favorite, of course, I don't use it in every software I built, but it is the most pattern I have ever used. Happy building!
