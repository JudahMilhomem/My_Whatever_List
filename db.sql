-- CREATE TABLE movies(
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     movie_name VARCHAR(50) NOT NULL,
--     rdate DATE NOT NULL, -- release date
--     synopsis TEXT,
--     director VARCHAR(30) NOT NULL,
--     srating DOUBLE PRECISION check(srating >= 1 AND srating <= 5) -- "star" rating (01 to 5)
-- );

-- CREATE TABLE animes(
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     anime_name VARCHAR(50) NOT NULL,
--     rdate DATE NOT NULL,
--     synopsis TEXT,
--     author VARCHAR(30) NOT NULL,
--     -- studio
--     srating DOUBLE PRECISION check(srating >= 1 AND srating <= 5),
--     finished BOOLEAN NOT NULL
-- );

CREATE TABLE games(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    game_name VARCHAR(50) NOT NULL,
    rdate DATE NOT NULL,
    descr TEXT, -- description
    -- tags (categories. Ex.: action, horror)
    company VARCHAR(20) NOT NULL,
    dmc_rating VARCHAR(3)
);
