<template>
    <div class="flex justify-center w-full">
        <div
            class="border-2 border-[#1a1a1a] py-4 mx-5 rounded-2xl h-full overflow-y-auto max-h-100 relative z-2"
            style="scrollbar-width: none;"
        >
            <div class="grid grid-rows-1 gap-5 w-full">
                <GamemodeLink
                    title="Classique"
                    img="img/sausage.png"
                    description="Cartes à boire tranquilles, pour bien commencer."
                    to="/setup?gamemode=classic"
                    :disable-on-prod="false"
                />
                <GamemodeLink
                    title="Action ou vérité"
                    img="img/truth-or-dare.png"
                    description="Des questions et des actions"
                    to="/setup?gamemode=truth-or-dare"
                />
                <GamemodeLink
                    title="Autobahn"
                    img="img/autoroute.svg"
                    description="La meilleure défense, c'est l'attaque."
                    to="/setup?gamemode=autobahn"
                />
            </div>
        </div>
    </div>
</template>
