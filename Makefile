dev:
	npx tailwindcss -i ./src/input.css -o ./src/dist/output.css --watch

clean:
	npx prettier "**/*.html" --write

build:
	npx tailwindcss -o ./src/dist/output.css --minify