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
    rdate INT NOT NULL, -- change to DATE **
    company VARCHAR(20) NOT NULL,
    descr TEXT, -- description
    -- tags (categories. Ex.: action, horror)
    img_url TEXT,
    dmc_rating VARCHAR(3)
);

-- add img_url **
INSERT INTO games(game_name, rdate, descr, company, dmc_rating) VALUES('Hollow Knight', 2017, 'Um jogo muito foda.', 'Team Cherry', 'SSS');
INSERT INTO games(game_name, rdate, descr, company, dmc_rating) VALUES('Destiny 2', 2017, 'Um jogo que tem um lugar no meu coracao.', 'Bungie', 'SSS');
INSERT INTO games(game_name, rdate, descr, company, dmc_rating) VALUES('Batman Arkham Knight', 2015, 'Um jogo perfeito.', 'Rocksteady', 'SSS');
