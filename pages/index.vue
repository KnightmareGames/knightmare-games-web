<template>
  <div>
    <div class="flex justify-center">
      <div class="flex md:flex flex-wrap justify-center xl:w-4/5 mt-12 md:mt-24 lg:mt-48 ">
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10" >
          <div class="flex justify-center mt-10">
            <a href="https://www.ppracing.xyz/" target="_blank" rel="noopener noreferrer"><img src="/images/pp-racing-splash.jpg" alt="Planetary Pod Racing Splash Image" class="my-36"></a>
          </div>
          <div>
            <h1 class="font-sans text-3xl text-primary font-bold">Planetary Pod Racing</h1>
            <p class="font-sans text-primary font-light mt-10">
              A racing simulation game built specifically for Discord.
              It is the first Discord Bot to integrate Discord Servers as a main section of the gameplay.
              Explore, Scavenge, and Race your way across the multiverse
            </p>
            <p class="mt-4"><span class="font-bold">Platform: </span>Discord</p>
            <p class="mt-2 font-sans"><span class="font-bold">Status: </span>In Development</p>
          </div>
        </div>
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10" >
          <div class="flex justify-center mt-10">
            <a href="https://www.lc4a.com/" target="_blank" rel="noopener noreferrer"><img src="/images/lc4a-splash.jpg" alt="Last Call for Alcohol Splash Image" class="mt-12 mb-14"></a>
          </div>
          <div>
            <h1 class="font-sans text-3xl text-primary font-bold">Last Call for Alcohol</h1>
            <p class="font-sans text-primary font-light mt-10 mb-10">
              Last Call for Alcohol is a drinking party game that is quick to learn, but hard to master.
              Read your opponents, develop your strategy and make sure to hold the lowest number by the end of the round.
            </p>
            <p class="mt-4"><span class="font-bold">Platform: </span>Tabletop</p>
            <p class="mt-2 font-sans"><span class="font-bold">Status: </span>Complete</p>
          </div>
        </div>
        <div class="flex flex-col lg:w-1/3 xl:w-1/4  mx-10" >
          <div class="flex justify-center mt-10">
            <img src="/images/ufo-splash.jpg" alt="Die This World Splash Image" class="mt-16 mb-14">
          </div>
          <div>
            <h1 class="font-sans text-3xl text-primary font-bold">Die This World</h1>
            <p class="font-sans text-primary font-light mt-10">
              Die This World is a virtual reality destruction game where players wreak as much havoc on Earth as possible while controlling advanced alien crafts with powerful weapons.
              Rampage meets Destroy all Humans... IN VR!
            </p>
            <p class="mt-4"><span class="font-bold">Platform: </span>Virtual Reality</p>
            <p class="mt-2 font-sans"><span class="font-bold">Status: </span>In Development</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="flex md:flex flex-wrap justify-center xl:w-4/5 md:mt-12 lg:mt-48 ">
        <h1 class="font-sans text-3xl text-primary font-bold">Who is Knightmare Games?</h1>
        <p class="font-sans text-primary font-light mt-10">Knightmare Games is an independent game development studio working on creative experiences for every platform you can imagine.
          We are a fully distributed team covering the bases the engineering to animation. 
          We are always looking for talented people to join with full-time projects, part-time projects, and Game Jams.
          If you are interested in becoming part of our growing community, please get in touch on Discord.
        </p>        
      </div>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-col items-center justify-center xl:w-4/5 mt-8 lg:mt-12 ">
        <h1 class="font-sans text-3xl text-primary font-bold">Join us on Discord</h1>
        <div class="mt-10 mb-36"><a href="https://discord.gg/N72e47Etac" target="_blank" rel="noopener noreferrer"><img src="/images/discord-logo.svg" alt="Planetary Pod Racing Discord Link"></a></div>               
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Knightmare Games',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'knightmare-games-landing',
        name: 'keywords',
        content: 'indie, game, developer, game dev, indie game, VR, virtual reality, Meta Quest, Quest, Steam, PP Racing, LC4A, Die This World, Knightmare Games, Knightmare, games'
      },
      {
        hid: 'landing-description',
        name: 'description',
        content: 'Knightmare Games is an independent game development studio working on creative experiences for every platform you can imagine'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
}
</script>
