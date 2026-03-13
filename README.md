# DIL Tool (Discord Invite Lookup Tool)

A Python utility designed to fetch detailed information from Discord invite codes without the requirement of a Discord Bot Token. It utilizes public API endpoints to retrieve metadata regarding the invite creator, the guild, and the specific channel.

## Features

### User Information (Inviter)
* **User ID**: The unique snowflake ID of the person who created the invite.
* **Username**: The account username of the creator.
* **Display Name**: The global display name associated with the account.

### Guild Information (Server)
* **Guild ID**: The unique identifier for the Discord server.
* **Guild Name**: The name of the server the invite leads to.

### Channel Information
* **Channel ID**: The unique identifier for the specific destination channel.
* **Channel Name**: The name of the channel associated with the invite.

## Requirements
## Backend (Python)
* Python 3.11 or higher
* `requests` & `platform` & `colorama` libraries
## Front-End (Next.js)
* Node v22.22.1
* `NPM` or `YARN`
