import json, sys, requests as r

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No code provided"}))
        return
    inv = sys.argv[1]
    api = f"https://discord.com/api/v10/invites/{inv}"
    try:
        resp = r.get(api, timeout=5)
        resp.raise_for_status()
        data = resp.json()
        result = {
                    "userid": data.get("inviter", {}).get("id", "Unknown"),
                    "username": data.get("inviter", {}).get("username", "Unknown"),
                    "globalname": data.get("inviter", {}).get("global_name", "Unknown"),
                    "guildid": data.get("guild", {}).get("id", "Unknown"),
                    "guildname": data.get("guild", {1}).get("name", "Unknown"),
                    "channelid": data.get("channel", {}).get("id", "Unknown"),
                    "channelname": data.get("channel", {}).get("name", "Unknown")
                }
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()