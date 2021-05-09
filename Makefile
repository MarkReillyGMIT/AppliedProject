# Adapted from https://gist.github.com/magopian/4077998 

.PHONY: all help translate test clean update compass collect rebuild

SETTINGS={{ mainapp }}.settings
TEST_SETTINGS={{ mainapp }}.test_settings

DJANGO="backend/django_app/manage.py runserver"
REACTJS="frontend/frontend npm start"

# target: all - Default target. Does nothing.
all:
	@echo "Hello $(LOGNAME), nothing to do by default"
	@echo "Try 'make help'"

# target: help - Display callable targets.
help:
	@egrep "^# target:" [Mm]akefile

# target: translate - calls the "makemessages" django command
translate:
	cd {{ mainapp }} && django-admin.py makemessages --settings=$(SETTINGS) -i "site-static/*" -a --no-location

# target: test - calls the "test" django command
test:
	django-admin.py test --settings=$(TEST_SETTINGS)

# target: clean - remove all ".pyc" files
clean:
	django-admin.py clean_pyc --settings=$(SETTINGS)

# target: update - install (and update) pip requirements
update:
	pip install -U -r requirements.txt

# target: compass - compass compile all scss files
compass:
	cd {{ mainapp }}/compass && compass compile

# target: collect - calls the "collectstatic" django command
collect:
	django-admin.py collectstatic --settings=$(SETTINGS) --noinput

# target: rebuild - clean, update, compass, collect, then rebuild all data
rebuild: clean update compass collect
	django-admin.py reset_db --settings=$(SETTINGS) --router=default --noinput
	django-admin.py syncdb --settings=$(SETTINGS) --noinput
	django-admin.py migrate --settings=$(SETTINGS)
	#django-admin.py loaddata --settings=$(SETTINGS) <your fixtures here>
# target: run - Runs the Django and React servers.
run:
	bash -c "python3 backend/django_app/manage.py runserver & cd frontend/frontend && npm start"

