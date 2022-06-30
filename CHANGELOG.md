# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased] - yyyy-mm-dd

Here we write upgrading notes for brands. It's a team effort to make them as straightforward as possible.

## [1.4.1] - 2022-06-30

### Added

- Added logout system
- Divide AdminRoutes into AdminRoutesProtective & AdminRoutesUnProtective
- Unstable

## [1.4.0] - 2022-06-30

### Added

- Added login system for admin 
- Require admin name and password for login (.env)
- Using JWT token

## [1.3.1] - 2022-06-30

### Fixed

- Config the environmental variables 

## [1.3.0] - 2022-06-30

### Added

- Added HashAPI that converts string into hash

### Changed

- Create new folder called Helper.
- Put all Helper controllers in this file
- Required changes to Helper.routes

## [1.2.3] - 2022-06-30

### Changed

- Create new folder called ShortURL.
- Put all ShortURL controllers in this file
- Required changes to ShortURL.routes

## [1.2.2] - 2022-06-30

### Changed

- Create new folder called Admin.
- Put all admin controllers in this file
- Required changes to Admin.routes

## [1.2.1] - 2022-06-30

### Added

- Added ADMIN_NAME, ADMIN_PASSWORD & JWT_SECRET to environment variables

## [1.2.0] - 2022-06-30

### Added 

- Added bcrypt and jsonwebtoken


## [1.1.0] - 2022-06-29

### Added

- Create MongoDB atlas  and port for production mode

## [1.0.0] - 2022-06-29

### Added

- [6077d10](https://github.com/KarthikUdyawar/url-shortener/commit/6077d10) - Build the project in dist directory

## [0.9.2] - 2022-06-24

### Changed

- [931073c](https://github.com/KarthikUdyawar/url-shortener/commit/931073c) - Formatted CHANGELOG.md & tsconfig.json

## [0.9.1] - 2022-06-24

### Changed

- [279f04d](https://github.com/KarthikUdyawar/url-shortener/commit/279f04d) - Cleaning isValidHttpUrl

## [0.9.1] - 2022-06-24

### Changed

- [8f5390f](https://github.com/KarthikUdyawar/url-shortener/commit/8f5390f) - Cleaning CHANGELOG.md

## [0.9.0] - 2022-06-24

### Added

- [bd2fea5](https://github.com/KarthikUdyawar/url-shortener/commit/bd2fea5) - Added customize for short URL for users

## [0.8.4] - 2022-06-24

### Fixed

- [a39a19d](https://github.com/KarthikUdyawar/url-shortener/commit/a39a19d) - Increase the maxLength of short up to 16

## [0.8.3] - 2022-06-24

### Fixed

- [d49574b](https://github.com/KarthikUdyawar/url-shortener/commit/d49574b) - Changed RedirectShortUrl API router /:id -> /mini/:id

## [0.8.2] - 2022-06-24

### Fixed

- [22de5a5](https://github.com/KarthikUdyawar/url-shortener/commit/22de5a5) - Changed FetchShortUrlsById API router /:id -> /url/:id

## [0.8.1] - 2022-06-23

### Changed

- [8fbaa1e](https://github.com/KarthikUdyawar/url-shortener/commit/8fbaa1e) - Add links to all versions

## [0.8.0] - 2022-06-23

### Added

- [0fc583a](https://github.com/KarthikUdyawar/url-shortener/commit/0fc583a) - Added new controller called UpdateShortUrlById that update data by id from the database for admin

## [0.7.0] - 2022-06-23

### Added

- [fd4517b](https://github.com/KarthikUdyawar/url-shortener/commit/fd4517b) - Added new controller called DeleteShortUrlById that delete data by id from the database for admin

## [0.6.0] - 2022-06-23

### Added

- [4bff6e2](https://github.com/KarthikUdyawar/url-shortener/commit/4bff6e2) - Added new controller called FetchShortUrlsById that fetch data by id from the database for admin

## [0.5.0] - 2022-06-23

### Added

- [164b3ec](https://github.com/KarthikUdyawar/url-shortener/commit/164b3ec) - Added new controller called FetchShortUrlsAll that fetch all data from the database for admin

## [0.4.0] - 2022-06-23

### Added

- [17d8d9d](https://github.com/KarthikUdyawar/url-shortener/commit/17d8d9d) - Added new admin router for admin mode

## [0.3.0] - 2022-06-23

### Changed

- [7686f50](https://github.com/KarthikUdyawar/url-shortener/commit/7686f50) - Rename routers to ShortUrlRoutes for organization

## [0.2.0] - 2022-06-22

### Added

- [bac20bf](https://github.com/KarthikUdyawar/url-shortener/commit/bac20bf) - Added new feature
- [92bc9e9](https://github.com/KarthikUdyawar/url-shortener/commit/92bc9e9) - Added ErrorHandler
- [48735b1](https://github.com/KarthikUdyawar/url-shortener/commit/48735b1) - Added HttpException
- [41e67dc](https://github.com/KarthikUdyawar/url-shortener/commit/41e67dc) - Added Logger
- [bb8e7d6](https://github.com/KarthikUdyawar/url-shortener/commit/bb8e7d6) - Added cors middleware
- [9113f5d](https://github.com/KarthikUdyawar/url-shortener/commit/9113f5d) - Added new dependencies
- [49319e9](https://github.com/KarthikUdyawar/url-shortener/commit/49319e9) - Miner changes

### Changed

- [db91dd0](https://github.com/KarthikUdyawar/url-shortener/commit/db91dd0) - Update CHANGELOG.md
- [9734c27](https://github.com/KarthikUdyawar/url-shortener/commit/9734c27) - Update CHANGELOG.md

### Fixed

- [07cdda1](https://github.com/KarthikUdyawar/url-shortener/commit/07cdda1) - Fixed Error ErrorHandler

## [0.1.6-beta] - 2022-06-20

### Changed

- [bd95d75](https://github.com/KarthikUdyawar/url-shortener/commit/bd95d75) - Used Prettier
- [87d536b](https://github.com/KarthikUdyawar/url-shortener/commit/87d536b) - Patch change

### Removed

- [68c3ac2](https://github.com/KarthikUdyawar/url-shortener/commit/68c3ac2) - Deleted IErrorMessage interface

### Fixed

- [a641cbd](https://github.com/KarthikUdyawar/url-shortener/commit/a641cbd) - Updated RedirectShortUrl response system

## [0.1.5-beta] - 2022-06-20

### Added

- [7828a80](https://github.com/KarthikUdyawar/url-shortener/commit/7828a80) - Create IResponse.ts
- [876c368](https://github.com/KarthikUdyawar/url-shortener/commit/876c368) - Create IMessage.ts

### Changed

- [1e3a219](https://github.com/KarthikUdyawar/url-shortener/commit/1e3a219) - Change test.controller -> Test.controller

### Deprecated

- [c236c2b](https://github.com/KarthikUdyawar/url-shortener/commit/c236c2b) - IErrorMessage interface will be removed

### Removed

- [a8e714a](https://github.com/KarthikUdyawar/url-shortener/commit/a8e714a) - Remove useless import and variable
- [7c1fbba](https://github.com/KarthikUdyawar/url-shortener/commit/7c1fbba) - Delete ICreateReqBody interface

### Fixed

- [836904e](https://github.com/KarthikUdyawar/url-shortener/commit/836904e) - Using IResponse & IMessage interfaces in response

## [0.1.4-beta] - 2022-06-20

### Fixed

- [68dd928](https://github.com/KarthikUdyawar/url-shortener/commit/68dd928) - Use IReqBody instead of ICreateReqBody

### Removed

- [7c1fbba](https://github.com/KarthikUdyawar/url-shortener/commit/7c1fbba) - Delete ICreateReqBody interface

## [0.1.3-beta] - 2022-06-20

### Fixed

- [a051f22](https://github.com/KarthikUdyawar/url-shortener/commit/a051f22) - Fixed Create short URL API

## [0.1.2-beta] - 2022-06-20

### Fixed

- [1735da9](https://github.com/KarthikUdyawar/url-shortener/commit/1735da9) - Fixed RedirectShortUrl API

---

## [0.1.1-alpha.2] - 2022-06-19

### Added

- [62725e4](https://github.com/KarthikUdyawar/url-shortener/commit/62725e4) - Added Redirect short URL API
- [89ea302](https://github.com/KarthikUdyawar/url-shortener/commit/89ea302) - Added Create short utl utl API
- [174b9bf](https://github.com/KarthikUdyawar/url-shortener/commit/174b9bf) - Added shortURL model
- [b45bee5](https://github.com/KarthikUdyawar/url-shortener/commit/b45bee5) - Added router and controller 🎉

### Changed

- [9723a7e](https://github.com/KarthikUdyawar/url-shortener/commit/9723a7e) - Downgrade major versions

## [0.1.0-alpha.1] - 2022-06-19

### Added

- [f79f46a](https://github.com/KarthikUdyawar/url-shortener/commit/f79f46a) - Merge pull request #1 from KarthikUdyawar/add-license-1
- [a8d8d09](https://github.com/KarthikUdyawar/url-shortener/commit/a8d8d09) - (origin/add-license-1) Create LICENSE
- [e307afa](https://github.com/KarthikUdyawar/url-shortener/commit/e307afa) - Start server and test API

## [0.1.0-alpha] - 2022-06-19

### Added

- [b1d5156](https://github.com/KarthikUdyawar/url-shortener/commit/b1d5156) - Added Eslint + Prettier + Nodemon configuration for Typescript
- [f351ebb](https://github.com/KarthikUdyawar/url-shortener/commit/f351ebb) - Added dependencies
- [144bac9](https://github.com/KarthikUdyawar/url-shortener/commit/144bac9) - First Commit 🎉
