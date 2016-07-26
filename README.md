### Fairmont Mobile Cart Demo

Requirements:
Npm, Typescript, Golang 1.6+, boltengine ( https://github.com/TeamFairmont/boltengine/releases )

Vscode preferred
```
npm install -g typescript
npm install typings --global
```

Compile typescripts: `./tsc.sh`

Compile simple httpserver: `go build ./httpserv.go`

Copy boltengine into project directory: `cp /path/to/boltengine ./`

Run: `./boltengine` and `./httpserv` from the project directory

Open your browser to `http://localhost:8080`
