import React from 'react';
import { Clock, UtensilsCrossed, ArrowUpRight } from 'lucide-react';
import { recipeIdeas } from '../mock';

export const Recipes = () => {
  return (
    <section id="recipes" className="relative bg-[var(--theme-surface)] py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-[var(--theme-divider)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[var(--theme-divider)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface-alt)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--theme-text-muted)] shadow">
            Chef Notes
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--theme-text-strong)]">
            Recipes to Drizzle, Toast & Celebrate
          </h2>
          <p className="max-w-2xl text-lg text-[var(--theme-text)]">
            Invite the oils into every course—from breakfast granola bakes to smoky dinner finales.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {recipeIdeas.map((recipe) => (
            <article
              key={recipe.title}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[var(--theme-border-soft)] bg-[var(--theme-background)] shadow-lg shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--theme-primary)] lg:flex-row"
            >
              <div className="relative h-64 w-full overflow-hidden lg:h-auto lg:w-2/5">
                <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  <Clock className="h-4 w-4" />
                  {recipe.time}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-8 py-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text-strong)]">{recipe.title}</h3>
                <p className="text-[var(--theme-text)]">{recipe.description}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--theme-primary-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--theme-primary)]">
                    <UtensilsCrossed className="h-4 w-4" /> Signature pour
                  </div>
                  <button className="flex items-center gap-1 text-sm font-semibold text-[var(--theme-primary)] transition-transform duration-300 group-hover:translate-x-1">
                    View method
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
