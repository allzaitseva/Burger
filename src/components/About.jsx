/** @format */

export default function About() {
  return (
    <section id='About' className='w-full min-h-full'>
      <h2
        className='text-2xl font-extrabold mb-3 text-white text-center
        mt-20 lg:mt-20'>
        — WHO ARE WE —
      </h2>
      <div>
        <div className='static text-base xl:text-lg text-white mt-15 px-6 w-full lg:w-[600px] xl:w-[800px] 2xl:w-[1200px] lg:px-10 xl:px-30 2xl:px-72'>
          <p>
            Community Engagement Through Partnerships With Local Farms And Food
            Producers.
          </p>
          <p className='mt-10'>
            Social Media Integration For Sharing Photos, Reviews, And Connecting
            With The Burger-Loving Community.
          </p>
          <div className='mt-10 w-[70px] h-[2px] bg-white'></div>
          <p className='mt-10'>
            Detailed Nutritional Information For Every Burger, Appealing To
            Health-Conscious And Informed Customers.
          </p>
          <p className='mt-10'>
            Extensive Selection Of Burgers Including Classic, Gourmet,
            Plant-Based, And Fully Customizable Options.
          </p>
          <div
            href='https://www.instagram.com'
            className='flex mt-10 gap-3 cursor-pointer w-[100px]'>
            <img src='igLogo.svg' alt='Instagram' className='h-[30px] w-[30px]' />
            <p className='text-[18px] underline text-white/90'>Share</p>
          </div>
          {/* Image block */}
          <div className='relative h-[200px] w-[300px] mx-auto bg-gradient-to-t from-[#f15c3f] to-[#ffc08f]/50 rounded-2xl mt-25 
          lg:absolute lg:h-[250px] lg:w-[350px] lg:-mt-80 lg:right-10 xl:right-30 2xl:right-72 '>
            <img
              src='burgerGirl.png'
              alt='Girl'
              className='absolute img-shadow -mt-25'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
