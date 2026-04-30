# Changelog

## 3.2.0 (2026-04-30)

Full Changelog: [v3.1.0...v3.2.0](https://github.com/channel3-ai/sdk-typescript/compare/v3.1.0...v3.2.0)

### Features

* Add SDK client-level locale ([eebeaf2](https://github.com/channel3-ai/sdk-typescript/commit/eebeaf2ac7c1635cde9bbd0f38b9ca6b1976b8ea))
* **api:** add categories, products/brands search, deprecate search/enrich, brands to v1 ([d068ac9](https://github.com/channel3-ai/sdk-typescript/commit/d068ac97664ee50453fed88c1e130d03f957ccda))
* **api:** add country/currency/language parameters to products/search ([e125d0f](https://github.com/channel3-ai/sdk-typescript/commit/e125d0fb7e827d4b6a78ecf1f8080af881a4f454))
* Image search endpoint ([213862d](https://github.com/channel3-ai/sdk-typescript/commit/213862debc58bbd599f64bd10dd8c1728938ad14))
* support setting headers via env ([187aac2](https://github.com/channel3-ai/sdk-typescript/commit/187aac27fdbc3898b8f54803eef14d64d48892a6))


### Bug Fixes

* **types:** remove MIN_PRICE_FLOOR field from SearchFilterPrice ([02d001b](https://github.com/channel3-ai/sdk-typescript/commit/02d001b70712ff385d2f498bafe2cc977be46699))
* **types:** remove unisex option from gender field in SearchFilters ([cd1843e](https://github.com/channel3-ai/sdk-typescript/commit/cd1843e5ad587661ac518b0b944edeb1b97979fe))


### Chores

* **format:** run eslint and prettier separately ([82d64c4](https://github.com/channel3-ai/sdk-typescript/commit/82d64c4298a5d4a4773fdb69d5ace17cc21b65b1))
* **internal:** codegen related update ([e970831](https://github.com/channel3-ai/sdk-typescript/commit/e970831eeea2cef5a99b1fcd5434463e761d5a24))
* **internal:** more robust bootstrap script ([6319ac9](https://github.com/channel3-ai/sdk-typescript/commit/6319ac9828fa5deae39400bafe4eb510a0455419))


### Documentation

* **api:** clarify category_ids and exclude_category_ids accept slugs in search ([be6c730](https://github.com/channel3-ai/sdk-typescript/commit/be6c730c18079a668163f33a5d377958539b6ee3))
* **api:** clarify search parameter requirements ([55bdca6](https://github.com/channel3-ai/sdk-typescript/commit/55bdca66ff21fa5a12a8b815f55da3efe29234d7))

## 3.1.0 (2026-04-13)

Full Changelog: [v3.0.1...v3.1.0](https://github.com/channel3-ai/sdk-typescript/compare/v3.0.1...v3.1.0)

### Chores

* align version with Python SDK ([8511979](https://github.com/channel3-ai/sdk-typescript/commit/851197931caf0507159728a761e48e5aa77633ca))

## 3.0.1 (2026-04-13)

Full Changelog: [v3.0.0...v3.0.1](https://github.com/channel3-ai/sdk-typescript/compare/v3.0.0...v3.0.1)

### Chores

* **ci:** skip lint on metadata-only changes ([a8c8a24](https://github.com/channel3-ai/sdk-typescript/commit/a8c8a24ed264c06024a43dc8be8cb1807ae64785))
* **internal:** codegen related update ([7b08d13](https://github.com/channel3-ai/sdk-typescript/commit/7b08d13098c1640a5cd0a9fb73c00ff3c7b15475))
* **internal:** codegen related update ([418941e](https://github.com/channel3-ai/sdk-typescript/commit/418941eec078e52e54e02c057044aa6d27cba0de))
* **internal:** codegen related update ([ce51147](https://github.com/channel3-ai/sdk-typescript/commit/ce51147d625eb81c0c0e9083a5762f941490ec8e))
* **internal:** regenerate SDK with no functional changes ([f8c6193](https://github.com/channel3-ai/sdk-typescript/commit/f8c61938c935f5ea52f3f9760eec1323e3442fd5))
* **internal:** tweak CI branches ([39c5b7e](https://github.com/channel3-ai/sdk-typescript/commit/39c5b7e3b38d92bcd307a1cebbe8d93b6ce71fd1))
* **internal:** update gitignore ([b6aca12](https://github.com/channel3-ai/sdk-typescript/commit/b6aca1208ebe80e1bfc8d80f31fb27324339db0c))

## 3.0.0 (2026-03-12)

Full Changelog: [v2.13.0...v3.0.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.13.0...v3.0.0)

### Features

* **api:** add brands.retrieve, upgrade search to v1 with pagination, remove deprecated fields ([563ceb0](https://github.com/channel3-ai/sdk-typescript/commit/563ceb008ed517553f6bd07a88c9f363bc0caca7))
* **api:** add products v1 endpoint, remove deprecated Product/Variant types, enrich response type ([106c98d](https://github.com/channel3-ai/sdk-typescript/commit/106c98d1b866dd9eca178a250668f5c04d3b8a99))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([11fd64d](https://github.com/channel3-ai/sdk-typescript/commit/11fd64dbdc39d8f3842ba4275d4c691b14d34364))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([929ed2c](https://github.com/channel3-ai/sdk-typescript/commit/929ed2cf1e1c80e1ebe0c09a89baa97772fc268b))
* **internal:** codegen related update ([1714a00](https://github.com/channel3-ai/sdk-typescript/commit/1714a00dfda4adf143372f517e3a7c2101a71dbb))
* **internal:** update dependencies to address dependabot vulnerabilities ([129058c](https://github.com/channel3-ai/sdk-typescript/commit/129058c9b6704ffd460947bd589702672f553e78))

## 2.13.0 (2026-03-03)

Full Changelog: [v2.12.0...v2.13.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.12.0...v2.13.0)

### Features

* alex/search service v2 ([7eb5917](https://github.com/channel3-ai/sdk-typescript/commit/7eb591750f6c97b81d8a89bc4b56ad62eae6095e))
* **api:** api update ([371ee62](https://github.com/channel3-ai/sdk-typescript/commit/371ee62d5e0e67ba28b630d818ce377dfa1e3093))
* **api:** api update ([a9a6045](https://github.com/channel3-ai/sdk-typescript/commit/a9a6045bb8bf3a28b068d3e4797fca8179c36a20))
* **api:** api update ([9baac2d](https://github.com/channel3-ai/sdk-typescript/commit/9baac2db3e8525b6c161b3fb006d472231e89cd0))
* **api:** api update ([5f92c68](https://github.com/channel3-ai/sdk-typescript/commit/5f92c680cc3dfafc7f78b902dbbc12352af5b43b))
* **api:** api update ([f7c6ea2](https://github.com/channel3-ai/sdk-typescript/commit/f7c6ea278fbe53b9cd652e6fd39c0ac6957a8cf6))
* **api:** api update ([7b9ea72](https://github.com/channel3-ai/sdk-typescript/commit/7b9ea72773294aa4a60f56dd23912b4b9fa32236))
* **api:** api update ([e02d70d](https://github.com/channel3-ai/sdk-typescript/commit/e02d70d9c2eef36fe5f4c92a7ce316eebe112b8f))
* **api:** api update ([3bcd1c8](https://github.com/channel3-ai/sdk-typescript/commit/3bcd1c81cb0c3763960c8d5170387f9d16d481e5))
* **api:** api update ([2d46f1b](https://github.com/channel3-ai/sdk-typescript/commit/2d46f1be912e3a27fdae5f0b6c46e5241ca21929))
* **api:** api update ([60206f1](https://github.com/channel3-ai/sdk-typescript/commit/60206f13111f303a918fe664c54fe4363037d3a3))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([2f6d14d](https://github.com/channel3-ai/sdk-typescript/commit/2f6d14d415cb91a60400b08afd90280a12c3515e))
* **client:** avoid removing abort listener too early ([841eed4](https://github.com/channel3-ai/sdk-typescript/commit/841eed44b13fae489c0e8dd8b149b3803fdc3b62))
* **docs/contributing:** correct pnpm link command ([31d0198](https://github.com/channel3-ai/sdk-typescript/commit/31d0198d6529c1103cecac18dc981a74cee5cea7))


### Chores

* **api:** minor updates ([7ca072c](https://github.com/channel3-ai/sdk-typescript/commit/7ca072ce37b72c410b30d37689b62611f7035c35))
* **ci:** upgrade `actions/github-script` ([a2c4022](https://github.com/channel3-ai/sdk-typescript/commit/a2c4022f2ca7db4a408a29af01ad23b7c98e8cc4))
* **client:** do not parse responses with empty content-length ([094b658](https://github.com/channel3-ai/sdk-typescript/commit/094b6581e1752b4ca975a1673df206ac474adb2b))
* **client:** restructure abort controller binding ([5014ecf](https://github.com/channel3-ai/sdk-typescript/commit/5014ecf6414ff8a642f8a10e14e29f093a92b357))
* **internal/client:** fix form-urlencoded requests ([b3ad1f6](https://github.com/channel3-ai/sdk-typescript/commit/b3ad1f60caf6b86392f9174f3279eff2ee5392ab))
* **internal:** avoid type checking errors with ts-reset ([53071ac](https://github.com/channel3-ai/sdk-typescript/commit/53071ac8999f03bccfcb6ae0decbd262dd4b1134))
* **internal:** move stringifyQuery implementation to internal function ([0003232](https://github.com/channel3-ai/sdk-typescript/commit/00032329a353a8ec982b41f64185faeb3bfd1bcd))
* **internal:** remove mock server code ([5fd89e2](https://github.com/channel3-ai/sdk-typescript/commit/5fd89e25e858b8e8042d108fa7971b98b18a5602))
* update mock server docs ([82cf04b](https://github.com/channel3-ai/sdk-typescript/commit/82cf04b00aac70fd56a906efe4615cdfe06f6636))

## 2.12.0 (2026-01-19)

Full Changelog: [v2.11.0...v2.12.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.11.0...v2.12.0)

### Features

* **api:** api update ([61fc3a5](https://github.com/channel3-ai/sdk-typescript/commit/61fc3a5f2452fb4e7f4c86b5488ef9662f311a73))
* **api:** api update ([b7ad55b](https://github.com/channel3-ai/sdk-typescript/commit/b7ad55b829dd0f588cb20f06d7c2dfa8751aa86d))


### Chores

* **internal:** update `actions/checkout` version ([aa9cfe8](https://github.com/channel3-ai/sdk-typescript/commit/aa9cfe8d34c8d450e0d7ca5084209518626c1c5f))
* **internal:** upgrade babel, qs, js-yaml ([3a53cb9](https://github.com/channel3-ai/sdk-typescript/commit/3a53cb9aa5966c02ddd0645469e748b98d9399e8))

## 2.11.0 (2026-01-14)

Full Changelog: [v2.10.0...v2.11.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.10.0...v2.11.0)

### Features

* **api:** api update ([fac9dbf](https://github.com/channel3-ai/sdk-typescript/commit/fac9dbf68457542782ec88be895dc7738d548898))

## 2.10.0 (2026-01-14)

Full Changelog: [v2.9.0...v2.10.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.9.0...v2.10.0)

### Features

* **api:** api update ([17f20ea](https://github.com/channel3-ai/sdk-typescript/commit/17f20eaf395bfa1a2307ddce2258cceaaf069d9e))


### Chores

* break long lines in snippets into multiline ([30853de](https://github.com/channel3-ai/sdk-typescript/commit/30853dea23ee1e36d2413bf76768590fe68216c7))
* **internal:** codegen related update ([de52a02](https://github.com/channel3-ai/sdk-typescript/commit/de52a020f9be71d64238b7152bb7ca52f3fdf0a6))

## 2.9.0 (2025-12-17)

Full Changelog: [v2.8.0...v2.9.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.8.0...v2.9.0)

### Features

* Trigger Stainless ([b41018d](https://github.com/channel3-ai/sdk-typescript/commit/b41018df582a757757ba0cd7f108f36c92719459))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([e610d56](https://github.com/channel3-ai/sdk-typescript/commit/e610d56ede53dd54e2dc0031e310f2a1db0ab3c1))
* **mcp:** return correct lines on typescript errors ([6efa1ec](https://github.com/channel3-ai/sdk-typescript/commit/6efa1ec97e093396ce6121c5ca7faf65d9910580))


### Chores

* **internal:** codegen related update ([f936d37](https://github.com/channel3-ai/sdk-typescript/commit/f936d37e0e1e37f705660af6431fcf205958548e))
* **internal:** codegen related update ([af97bd9](https://github.com/channel3-ai/sdk-typescript/commit/af97bd9978011c5ca12032f5ac7315d1be57a34f))

## 2.8.0 (2025-12-03)

Full Changelog: [v2.7.0...v2.8.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.7.0...v2.8.0)

### Features

* Price tracking SDK updates ([2813e28](https://github.com/channel3-ai/sdk-typescript/commit/2813e28681e27c3a833c5255ef396896495bb4e4))


### Chores

* **internal:** upgrade eslint ([d90635e](https://github.com/channel3-ai/sdk-typescript/commit/d90635e7fe4f87ab71a68baf52cc26be3681ac43))

## 2.7.0 (2025-12-02)

Full Changelog: [v2.6.0...v2.7.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.6.0...v2.7.0)

### Features

* Remove empty get ([760994b](https://github.com/channel3-ai/sdk-typescript/commit/760994b923d1fa93682be543ddd598ee7c6c7274))

## 2.6.0 (2025-12-02)

Full Changelog: [v2.5.0...v2.6.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.5.0...v2.6.0)

### Features

* fix/trigger workflow ([a857107](https://github.com/channel3-ai/sdk-typescript/commit/a857107631a02d1bb518fd758762243178568a40))

## 2.5.0 (2025-12-02)

Full Changelog: [v2.4.0...v2.5.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.4.0...v2.5.0)

### Features

* **api:** manual updates ([446aac6](https://github.com/channel3-ai/sdk-typescript/commit/446aac6922f3e6d9ddef89b79b914a2e9fb05d5c))
* Use Product-Output schema in Stainless config ([3dd7257](https://github.com/channel3-ai/sdk-typescript/commit/3dd72579696c58bb42bbae6e2a224623c3dc6521))


### Chores

* **client:** fix logger property type ([252ec90](https://github.com/channel3-ai/sdk-typescript/commit/252ec900b3a8819a288a58b15bc2df7a94bb0f01))

## 2.4.0 (2025-11-12)

Full Changelog: [v2.3.0...v2.4.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.3.0...v2.4.0)

### Features

* Test: Stainless permissions and docs update ([5cf44c0](https://github.com/channel3-ai/sdk-typescript/commit/5cf44c08bdf6f158a228591c8c2391f92a533e54))
* Updating config ([8bde979](https://github.com/channel3-ai/sdk-typescript/commit/8bde97946627ec1ee42ba54033e8b8bb24256106))

## 2.3.0 (2025-11-10)

Full Changelog: [v2.2.0...v2.3.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.2.0...v2.3.0)

### Features

* **api:** api update ([844e891](https://github.com/channel3-ai/sdk-typescript/commit/844e891ae9ae994efd21b69180501addb65b506f))

## 2.2.0 (2025-10-28)

Full Changelog: [v2.1.1...v2.2.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.1.1...v2.2.0)

### Features

* **api:** api update ([313c32e](https://github.com/channel3-ai/sdk-typescript/commit/313c32e2d93f242a3f722c0cc21722b26c4efbe5))
* **api:** api update ([44385f6](https://github.com/channel3-ai/sdk-typescript/commit/44385f6c05bc4836228e79bbe39d74da5c13256a))
* **api:** api update ([3bd00eb](https://github.com/channel3-ai/sdk-typescript/commit/3bd00ebf436c500842a4560c3dbf1a822295bc46))

## 2.1.1 (2025-10-21)

Full Changelog: [v2.1.0...v2.1.1](https://github.com/channel3-ai/sdk-typescript/compare/v2.1.0...v2.1.1)

### Performance Improvements

* faster formatting ([e4097ef](https://github.com/channel3-ai/sdk-typescript/commit/e4097ef4af7a2e23403da5fd3d6d197c4a0ae69f))


### Chores

* do not install brew dependencies in ./scripts/bootstrap by default ([d4a9408](https://github.com/channel3-ai/sdk-typescript/commit/d4a94087c3b9168d4e344491a021caa49aa1464d))
* **internal:** codegen related update ([de16ba1](https://github.com/channel3-ai/sdk-typescript/commit/de16ba1cfd34472ef6f55efac77bf8a53beb1ede))
* **internal:** fix incremental formatting in some cases ([4a02a09](https://github.com/channel3-ai/sdk-typescript/commit/4a02a09cef4f3dbbd8dc21989e554d2f688af261))
* **internal:** ignore .eslintcache ([7d5bd63](https://github.com/channel3-ai/sdk-typescript/commit/7d5bd6374b74a55e7a121bb6f2f2ffa6a6ba76e0))
* **internal:** remove .eslintcache ([9ca0ff5](https://github.com/channel3-ai/sdk-typescript/commit/9ca0ff5ab24735effeb9b24a8f0075c3ba63088a))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([7712003](https://github.com/channel3-ai/sdk-typescript/commit/771200376626ee61d0daf486953e18dbfcfbdd48))
* **internal:** use npm pack for build uploads ([2579a45](https://github.com/channel3-ai/sdk-typescript/commit/2579a45aa83df0ac3a8ba26023578b2ce345fde1))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([024c426](https://github.com/channel3-ai/sdk-typescript/commit/024c4268c88f00a5a77da8370e09de35c2aca888))

## 2.1.0 (2025-09-16)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/channel3-ai/sdk-typescript/compare/v2.0.0...v2.1.0)

### Features

* **api:** manual updates ([9740342](https://github.com/channel3-ai/sdk-typescript/commit/974034268f70061c332938636dcb1a5249a656ff))

## 2.0.0 (2025-09-16)

Full Changelog: [v0.0.1...v2.0.0](https://github.com/channel3-ai/sdk-typescript/compare/v0.0.1...v2.0.0)

### Features

* **api:** api update ([b6aef62](https://github.com/channel3-ai/sdk-typescript/commit/b6aef62a441b11756697ceab4c5bc252f3dbe336))
* **api:** manual updates ([2927562](https://github.com/channel3-ai/sdk-typescript/commit/2927562fc383293ce0e857547388a266bc010381))


### Chores

* sync repo ([22dfc31](https://github.com/channel3-ai/sdk-typescript/commit/22dfc314c1e4a18dfc4e15d24568e6d41ec884c7))
* update SDK settings ([688c98b](https://github.com/channel3-ai/sdk-typescript/commit/688c98b9055cc4b530c88416718925551bef063b))
* update SDK settings ([ec5130b](https://github.com/channel3-ai/sdk-typescript/commit/ec5130b090392d1d9b4a9cb87d74ff44a4116e2f))
