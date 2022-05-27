import React from "https://esm.sh/react@18.1.0";
import { SWRConfig } from "https://esm.sh/swr@1.3.0?deps=react@18";
import { Helmet } from "https://esm.sh/react-helmet-async@1.3.0?deps=react@18";
import { Route, Switch } from "https://esm.sh/wouter@2.8.0-alpha.2?deps=react@18";
import ultraCache from "ultra/cache";
import { Cache } from "https://deno.land/x/ultra@v1.0.1/src/types.ts";

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
    <SWRConfig value={options(cache)}>
      <Helmet>
        <title>Ultra</title>
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      <main>
        <Switch>
          <Route path="/">
            <header>
              <section className="hero">
                <h1 className="hero-message">
                  <div>hello world from</div>
                  <div>ultra framework on deno</div>
                </h1>
                <p className="under-hero">Lorem ipsum dolor sit amet consectetu adipisicing elit. Nemo in doloremque quam, voluptatibus eum voluptatum.</p>
                <div className="button-list">
                  <button className="primary">Primary Button</button>
                  <button>Normal Button</button>
                </div>
              </section>
              <picture className="promo-art">
                <img src="https://doodleipsum.com/700x700/outline?bg=3b5bdb" height="auto" width="100%" alt="a random doodle" />
              </picture>
            </header>
            <article className="aspect-demos">
              <div style={{aspectRatio: 'var(--ratio-square)'}}>box</div>
              <div style={{aspectRatio: 'var(--ratio-landscape)'}}>landscape</div>
              <div style={{aspectRatio: 'var(--ratio-portrait)'}}>portrait</div>
              <div style={{aspectRatio: 'var(--ratio-widescreen)'}}>widescreen</div>
              <div style={{aspectRatio: '1.6180/1'}}>golden ratio</div>
              <div style={{aspectRatio: '18/5'}}>ultrawide</div>
            </article>
          </Route>
          <Route>
            <strong>404</strong>
          </Route>
        </Switch>
      </main>
    </SWRConfig>
  );
};

export default Ultra;
