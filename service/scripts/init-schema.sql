CREATE SCHEMA IF NOT EXISTS the_message;

CREATE TABLE public.users (
    "id" bigserial NOT NULL,
    "name" varchar NOT NULL,
    "source" varchar NOT NULL,
    "email" varchar,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "role_id" integer NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE public.roles (
    "id" bigserial NOT NULL,
    "name" varchar NOT NULL,
    "description" varchar,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);