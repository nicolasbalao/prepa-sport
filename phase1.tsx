import { useState } from "react";

const phases = {
  S1S2: {
    label: "Semaines 1-2",
    seances: [
      {
        id: "A",
        titre: "Séance A — Cardio Fondamental",
        objectif: "Réhabituer le système cardio sans se cramer",
        duree: "40 min",
        blocs: [
          {
            nom: "🔥 Échauffement",
            duree: "8 min",
            exercices: [
              { ex: "Marche rapide", detail: "3 min" },
              { ex: "Rotations chevilles → genoux → hanches", detail: "1 min" },
              { ex: "Montées de genoux sur place", detail: "20 reps" },
              { ex: "Talons-fesses sur place", detail: "20 reps" },
              { ex: "Trot très léger sur place", detail: "1 min" },
            ],
          },
          {
            nom: "🏃 Bloc Cardio",
            duree: "22 min",
            note: "Fractionné marche/course — Ne jamais dépasser 160 bpm. Test parole : tu dois pouvoir dire une phrase courte en courant.",
            exercices: [
              {
                ex: "1 min course lente + 2 min marche",
                detail: "× 6 = 18 min",
                badge: "×6",
              },
              { ex: "2 min marche récupération", detail: "Fin de bloc" },
            ],
          },
          {
            nom: "🦵 Bloc Chaise Killy",
            duree: "8 min",
            note: "Dos plaqué au mur, cuisses parallèles au sol, pieds à plat. Douleur cuisses = OK. Douleur genoux = remonte.",
            exercices: [
              { ex: "Chaise Killy", detail: "3 × 20 sec", repos: "60 sec" },
              {
                ex: "Squats lents (3 sec descente)",
                detail: "3 × 8 reps",
                repos: "60 sec",
              },
            ],
          },
          {
            nom: "🧘 Retour au calme",
            duree: "5 min",
            exercices: [
              { ex: "Marche lente", detail: "2 min" },
              { ex: "Étirement quadriceps debout", detail: "30 sec / jambe" },
              { ex: "Étirement mollets contre mur", detail: "30 sec / jambe" },
              {
                ex: "Étirement ischio assis, jambes tendues",
                detail: "30 sec",
              },
            ],
          },
        ],
      },
      {
        id: "B",
        titre: "Séance B — Force Haut du Corps",
        objectif: "Construire la base pour les tractions",
        duree: "45 min",
        blocs: [
          {
            nom: "🔥 Échauffement",
            duree: "8 min",
            exercices: [
              { ex: "Marche rapide", detail: "3 min" },
              {
                ex: "Rotations épaules avant/arrière",
                detail: "15 reps chaque",
              },
              { ex: "Rotations poignets et coudes", detail: "30 sec" },
              {
                ex: "10 pompes très lentes (préparation)",
                detail: "Tempo 3-1-3",
              },
            ],
          },
          {
            nom: "💪 Bloc Pompes (base tractions)",
            duree: "15 min",
            note: "Gainage permanent : ventre serré, corps aligné, pas les fesses en l'air.",
            exercices: [
              {
                ex: "Pompes classiques",
                detail: "4 × max (tu as fait 20 → vise 12-15)",
                repos: "90 sec",
              },
              {
                ex: "Pompes diamant (mains rapprochées)",
                detail: "3 × 6 reps",
                repos: "90 sec",
                info: "Cible les triceps et le buste — muscles clés pour les tractions",
              },
              {
                ex: "Pompes inclinées (pieds surélevés sur chaise)",
                detail: "3 × 8 reps",
                repos: "90 sec",
                info: "Simule la traction en mettant l'accent sur le haut de la poitrine et les épaules",
              },
            ],
          },
          {
            nom: "🔙 Bloc Dos (sans barre)",
            duree: "10 min",
            note: "Le dos est le moteur des tractions. 100% au sol, zéro matériel.",
            exercices: [
              {
                ex: "Superman sol",
                detail: "3 × 10 reps",
                repos: "45 sec",
                info: "Allongé ventre au sol, tu soulèves bras et jambes en même temps. Tiens 2 sec en haut. Explose vers le haut, descends lentement.",
              },
              {
                ex: "Reverse snow angel",
                detail: "3 × 12 reps",
                repos: "45 sec",
                info: "Allongé ventre au sol, bras le long du corps décollés du sol. Tu fais de grands cercles avec les bras en les gardant en l'air. Brûle les trapèzes et rhomboïdes.",
              },
            ],
          },
          {
            nom: "🦵 Bloc Chaise Killy",
            duree: "6 min",
            exercices: [
              { ex: "Chaise Killy", detail: "3 × 20 sec", repos: "60 sec" },
              {
                ex: "Fentes alternées",
                detail: "3 × 8 reps / jambe",
                repos: "60 sec",
                info: "Genou avant au-dessus de la cheville, genou arrière proche du sol.",
              },
            ],
          },
          {
            nom: "🧘 Retour au calme",
            duree: "5 min",
            exercices: [
              {
                ex: "Étirement pectoraux (bras en croix contre mur)",
                detail: "30 sec / côté",
              },
              {
                ex: "Étirement dos (position enfant, bras tendus)",
                detail: "45 sec",
              },
              {
                ex: "Étirement triceps (coude derrière la tête)",
                detail: "20 sec / bras",
              },
            ],
          },
        ],
      },
      {
        id: "C",
        titre: "Séance C — Cardio + Gainage",
        objectif: "Endurance + stabilité du corps entier",
        duree: "45 min",
        blocs: [
          {
            nom: "🔥 Échauffement",
            duree: "8 min",
            exercices: [
              { ex: "Marche rapide", detail: "3 min" },
              { ex: "Jumping jacks", detail: "20 reps" },
              { ex: "Rotations hanches", detail: "15 reps chaque sens" },
              { ex: "Trot léger", detail: "2 min" },
            ],
          },
          {
            nom: "🏃 Bloc Cardio",
            duree: "22 min",
            note: "Même protocole que Séance A. Objectif : sentir la progression vs lundi.",
            exercices: [
              {
                ex: "1 min course lente + 2 min marche",
                detail: "× 6 = 18 min",
                badge: "×6",
              },
              { ex: "2 min marche récupération", detail: "" },
            ],
          },
          {
            nom: "🧱 Bloc Gainage",
            duree: "10 min",
            note: "Ventre rentré, respiration normale. Ne jamais bloquer la respiration.",
            exercices: [
              { ex: "Planche frontale", detail: "3 × 25 sec", repos: "45 sec" },
              {
                ex: "Planche latérale",
                detail: "3 × 20 sec / côté",
                repos: "30 sec",
              },
              {
                ex: "Crunchs lents",
                detail: "3 × 12 reps",
                repos: "45 sec",
                info: "Monte jusqu'aux omoplates seulement, redescends lentement. Pas les mains derrière la nuque.",
              },
            ],
          },
          {
            nom: "🧘 Retour au calme",
            duree: "5 min",
            exercices: [
              { ex: "Marche lente", detail: "2 min" },
              { ex: "Étirement quadriceps", detail: "30 sec / jambe" },
              { ex: "Étirement mollets", detail: "30 sec / jambe" },
              {
                ex: "Respiration profonde (inspire 4 sec, expire 6 sec)",
                detail: "1 min",
              },
            ],
          },
        ],
      },
    ],
  },
  S3S4: {
    label: "Semaines 3-4",
    seances: [
      {
        id: "A",
        titre: "Séance A — Cardio Continu",
        objectif: "Passer du fractionné à la course continue",
        duree: "45 min",
        blocs: [
          {
            nom: "🔥 Échauffement",
            duree: "8 min",
            exercices: [
              { ex: "Marche rapide", detail: "3 min" },
              {
                ex: "Montées de genoux + talons fesses",
                detail: "30 sec chaque",
              },
              { ex: "Trot léger", detail: "3 min" },
            ],
          },
          {
            nom: "🏃 Bloc Cardio",
            duree: "20 min",
            note: "Course continue à allure très lente. Objectif : rester SOUS 150 bpm. Si tu dépasses 155 bpm → ralentis mais ne t'arrête pas.",
            exercices: [
              {
                ex: "Course continue lente",
                detail: "15 min sans arrêt",
                badge: "🎯 <150 bpm",
              },
              { ex: "Marche récupération", detail: "3 min" },
            ],
          },
          {
            nom: "🦵 Bloc Chaise Killy Progressif",
            duree: "10 min",
            note: "Progression vs semaines 1-2 : on monte le temps.",
            exercices: [
              { ex: "Chaise Killy", detail: "3 × 30 sec", repos: "75 sec" },
              {
                ex: "Squats sautés",
                detail: "3 × 6 reps",
                repos: "60 sec",
                info: "Descends en squat, explose vers le haut, réception souple. Si douleur aux genoux → squats classiques.",
              },
            ],
          },
          {
            nom: "🧘 Retour au calme",
            duree: "5 min",
            exercices: [
              { ex: "Marche lente", detail: "2 min" },
              { ex: "Étirements complets jambes", detail: "3 min" },
            ],
          },
        ],
      },
      {
        id: "B",
        titre: "Séance B — Force Haut du Corps+",
        objectif: "Augmenter le volume et la force",
        duree: "50 min",
        blocs: [
          {
            nom: "🔥 Échauffement",
            duree: "8 min",
            exercices: [
              { ex: "Trot léger", detail: "3 min" },
              { ex: "Rotations épaules + coudes", detail: "1 min" },
              { ex: "10 pompes lentes échauffement", detail: "Tempo 3-1-3" },
            ],
          },
          {
            nom: "💪 Bloc Pompes Progressif",
            duree: "18 min",
            exercices: [
              {
                ex: "Pompes classiques",
                detail: "5 × max",
                repos: "90 sec",
                info: "Objectif : dépasser 12 reps / série. Si tu y arrives → bonne progression !",
              },
              {
                ex: "Pompes archer (une main avancée)",
                detail: "3 × 5 reps / côté",
                repos: "90 sec",
                info: "Position pompe normale, une main avancée sur le côté. Tu charges plus d'un côté pour simuler mouvement unilatéral.",
              },
              {
                ex: "Dips sur chaise",
                detail: "3 × 8 reps",
                repos: "75 sec",
                info: "Mains sur bord de chaise, dos proche, descends jusqu'à 90° aux coudes.",
              },
            ],
          },
          {
            nom: "🔙 Bloc Dos Progressif",
            duree: "10 min",
            exercices: [
              {
                ex: "Superman sol",
                detail: "4 × 12 reps",
                repos: "45 sec",
                info: "Même exercice que S1-S2 mais on monte le volume. Tiens 3 sec en haut cette fois.",
              },
              {
                ex: "Reverse snow angel",
                detail: "4 × 15 reps",
                repos: "45 sec",
                info: "On augmente les reps. Garde les bras bien décollés du sol pendant tout le mouvement.",
              },
            ],
          },
          {
            nom: "🦵 Chaise Killy + Jambes",
            duree: "8 min",
            exercices: [
              { ex: "Chaise Killy", detail: "3 × 35 sec", repos: "75 sec" },
              {
                ex: "Fentes marchées",
                detail: "3 × 10 reps / jambe",
                repos: "60 sec",
              },
            ],
          },
          {
            nom: "🧘 Retour au calme",
            duree: "5 min",
            exercices: [
              {
                ex: "Étirement dos complet (position enfant)",
                detail: "45 sec",
              },
              { ex: "Étirement pectoraux", detail: "30 sec / côté" },
              {
                ex: "Étirement fessiers (jambe croisée allongé)",
                detail: "30 sec / côté",
              },
            ],
          },
        ],
      },
      {
        id: "C",
        titre: "Séance C — Simulation Partielle",
        objectif: "Tester sa progression sur les 3 épreuves",
        duree: "45 min",
        note: "⚡ Séance test — à faire en conditions réelles (dehors, tenue sport). C'est ta mesure de fin de Phase 1.",
        blocs: [
          {
            nom: "🔥 Échauffement",
            duree: "10 min",
            exercices: [
              { ex: "Marche rapide", detail: "3 min" },
              { ex: "Trot léger", detail: "5 min" },
              { ex: "Montées de genoux + rotations", detail: "2 min" },
            ],
          },
          {
            nom: "🏃 TEST 1 — Cardio",
            exercices: [
              {
                ex: "Course continue",
                detail: "20 min",
                badge: "🎯 <150 bpm",
                info: "Note si tu y arrives. Note comment tu te sens à la fin.",
              },
            ],
          },
          {
            nom: "🦵 TEST 2 — Chaise Killy",
            exercices: [
              {
                ex: "Chaise Killy jusqu'à l'échec",
                detail: "1 essai max",
                badge: "🎯 >45 sec",
                info: "Objectif fin Phase 1 : 45 secondes.",
              },
            ],
          },
          {
            nom: "💪 TEST 3 — Pompes (proxy tractions)",
            exercices: [
              {
                ex: "Pompes max en 1 série",
                detail: "Sans pause",
                badge: "🎯 >20 reps",
                info: "On mesure la progression depuis le départ (tu faisais 20). Objectif : maintenir ou dépasser.",
              },
            ],
          },
          {
            nom: "🧘 Retour au calme",
            duree: "5 min",
            exercices: [{ ex: "Étirements complets", detail: "5 min" }],
          },
        ],
      },
    ],
  },
};

const barreSection = {
  titre: "🔩 BONUS — Séance avec Barre (quand tu en trouves une)",
  note: "À intégrer à la place du Bloc Pompes dès que tu as accès à une barre. 2x/semaine idéalement.",
  exercices: [
    {
      ex: "Traction négative (monte en sautant, descends en 5 sec)",
      detail: "5 × 3 reps",
      repos: "2 min",
      info: "L'exercice le plus efficace pour débuter. Toute la progression vient de là.",
    },
    {
      ex: "Traction isométrique (tiens en haut)",
      detail: "4 × max (vise 5-10 sec)",
      repos: "90 sec",
      info: "Maintiens le menton au-dessus de la barre le plus longtemps possible.",
    },
    { ex: "Pompes classiques (complément)", detail: "3 × 10", repos: "60 sec" },
  ],
};

const objectifsFin = [
  { label: "Courir 20 min continu", cible: "< 150 bpm", emoji: "🏃" },
  { label: "Chaise Killy", cible: "> 45 sec", emoji: "🦵" },
  { label: "Pompes", cible: "> 20 reps", emoji: "💪" },
];

const planning = [
  { jour: "Lundi", seance: "Séance A", type: "cardio" },
  { jour: "Mardi", seance: "Repos", type: "repos" },
  { jour: "Mercredi", seance: "Séance B", type: "force" },
  { jour: "Jeudi", seance: "Repos", type: "repos" },
  { jour: "Vendredi", seance: "Séance C", type: "mixte" },
  { jour: "Samedi", seance: "Repos actif*", type: "repos" },
  { jour: "Dimanche", seance: "Repos", type: "repos" },
];

const typeColors = {
  cardio: "bg-blue-100 text-blue-800",
  force: "bg-orange-100 text-orange-800",
  mixte: "bg-purple-100 text-purple-800",
  repos: "bg-gray-100 text-gray-500",
};

export default function App() {
  const [semaine, setSemaine] = useState("S1S2");
  const [openSeance, setOpenSeance] = useState(0);
  const [openBloc, setOpenBloc] = useState(null);
  const [showBarre, setShowBarre] = useState(false);

  const current = phases[semaine];

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-sm">
      {/* Header */}
      <div className="bg-gray-900 text-white rounded-xl p-4 mb-4">
        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
          Phase 1 — Réveil
        </div>
        <h1 className="text-lg font-bold">Fiches Séances Complètes</h1>
        <p className="text-gray-300 text-xs mt-1">
          Lundi / Mercredi / Vendredi · 40-50 min
        </p>
      </div>

      {/* Objectifs fin de phase */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
        <div className="font-bold text-green-800 mb-2 text-xs uppercase tracking-wider">
          🎯 Objectifs fin de Phase 1
        </div>
        <div className="grid grid-cols-3 gap-2">
          {objectifsFin.map((o, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-2 text-center border border-green-100"
            >
              <div className="text-lg">{o.emoji}</div>
              <div className="text-xs text-gray-600 leading-tight">
                {o.label}
              </div>
              <div className="font-bold text-green-700 text-xs mt-1">
                {o.cible}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planning semaine */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4">
        <div className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wider">
          📅 Planning hebdo
        </div>
        <div className="grid grid-cols-7 gap-1">
          {planning.map((j, i) => (
            <div key={i} className="text-center">
              <div className="text-xs text-gray-400 mb-1">
                {j.jour.slice(0, 3)}
              </div>
              <div
                className={`rounded-lg p-1 text-xs font-medium ${typeColors[j.type]}`}
              >
                {j.seance === "Repos actif*" ? "Repos*" : j.seance}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">
          *Repos actif = marche 30 min ou vélo léger
        </p>
      </div>

      {/* Sélecteur semaines */}
      <div className="flex gap-2 mb-3">
        {Object.entries(phases).map(([key, val]) => (
          <button
            key={key}
            onClick={() => {
              setSemaine(key);
              setOpenSeance(0);
              setOpenBloc(null);
            }}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all ${semaine === key ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200"}`}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Onglets séances */}
      <div className="flex gap-2 mb-3">
        {current.seances.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              setOpenSeance(i);
              setOpenBloc(null);
            }}
            className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold border transition-all ${openSeance === i ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200"}`}
          >
            Séance {s.id}
          </button>
        ))}
      </div>

      {/* Séance affichée */}
      {(() => {
        const s = current.seances[openSeance];
        return (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <div className="bg-gray-50 p-3 border-b border-gray-100">
              <div className="font-bold text-gray-800">{s.titre}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.objectif}</div>
              <div className="flex gap-2 mt-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">
                  ⏱ {s.duree}
                </span>
                {s.note && (
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    ⚡ Séance test
                  </span>
                )}
              </div>
              {s.note && (
                <p className="text-xs text-yellow-700 mt-2 bg-yellow-50 p-2 rounded-lg">
                  {s.note}
                </p>
              )}
            </div>

            {s.blocs.map((bloc, bi) => (
              <div key={bi} className="border-b border-gray-100 last:border-0">
                <button
                  className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenBloc(openBloc === bi ? null : bi)}
                >
                  <div>
                    <span className="font-semibold text-gray-800">
                      {bloc.nom}
                    </span>
                    {bloc.duree && (
                      <span className="text-xs text-gray-400 ml-2">
                        {bloc.duree}
                      </span>
                    )}
                  </div>
                  <span className="text-gray-400 text-lg">
                    {openBloc === bi ? "−" : "+"}
                  </span>
                </button>

                {openBloc === bi && (
                  <div className="px-3 pb-3">
                    {bloc.note && (
                      <p className="text-xs text-blue-700 bg-blue-50 p-2 rounded-lg mb-2">
                        {bloc.note}
                      </p>
                    )}
                    <div className="space-y-2">
                      {bloc.exercices.map((ex, ei) => (
                        <div key={ei} className="bg-gray-50 rounded-lg p-2">
                          <div className="flex justify-between items-start">
                            <div className="font-medium text-gray-800 text-xs flex-1">
                              {ex.ex}
                            </div>
                            {ex.badge && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold ml-2 whitespace-nowrap">
                                {ex.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {ex.detail}
                            {ex.repos && (
                              <span className="text-gray-400">
                                {" "}
                                · repos {ex.repos}
                              </span>
                            )}
                          </div>
                          {ex.info && (
                            <div className="text-xs text-indigo-600 mt-1 bg-indigo-50 p-1.5 rounded">
                              💡 {ex.info}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })()}

      {/* Section Barre */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
        <button
          className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-50"
          onClick={() => setShowBarre(!showBarre)}
        >
          <div>
            <div className="font-bold text-gray-800">{barreSection.titre}</div>
            <div className="text-xs text-gray-400 mt-0.5">
              {barreSection.note}
            </div>
          </div>
          <span className="text-gray-400 text-lg">{showBarre ? "−" : "+"}</span>
        </button>
        {showBarre && (
          <div className="px-3 pb-3 space-y-2">
            {barreSection.exercices.map((ex, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-2">
                <div className="font-medium text-gray-800 text-xs">{ex.ex}</div>
                <div className="text-xs text-gray-500">
                  {ex.detail}
                  {ex.repos && (
                    <span className="text-gray-400"> · repos {ex.repos}</span>
                  )}
                </div>
                {ex.info && (
                  <div className="text-xs text-indigo-600 mt-1 bg-indigo-50 p-1.5 rounded">
                    💡 {ex.info}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer conseil */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-600">
        <span className="font-bold">📊 Suivi :</span> Après la Séance C des
        semaines 3-4, note tes résultats aux 3 tests. On ajuste la Phase 2 en
        fonction.
      </div>
    </div>
  );
}
