MOCHA?=node_modules/.bin/mocha
REPORTER?=spec
GROWL?=--growl
BAIL?=--bail
DEBUG=?
FLAGS=$(BAIL) $(GROWL) --reporter $(REPORTER) --colors

test:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test -name "*-test.js") $(FLAGS)

one:
	@NODE_ENV="test" \
	$(MOCHA) $(NAME) $(FLAGS)

unit:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test/unit -name "*-test.js") $(FLAGS)

integration:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test/integration -name "*-test.js") $(FLAGS)

acceptance:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test/acceptance -name "*-test.js") $(FLAGS)

.PHONY: test
