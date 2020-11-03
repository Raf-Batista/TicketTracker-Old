FROM ruby:2.7.2

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /app

COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install
COPY ./ ./

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]