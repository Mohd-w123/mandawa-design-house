import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-[80px] bg-[#F6F4EE] ">
      <div className="max-w-[1280px] m-auto">
        {/*hero section Header start */}
        <div className="flex items-center justify-center gap-1 mb-[60px]">
          <Image
            src={"/images/global/heroFlowers.png"}
            width={100}
            height={100}
            alt="flower"
          />
          <div>
            <h1 className=" text-4xl font-belleza mb-3.5 text-center md:text-6xl">
              History of Mandawa Design House
            </h1>
            <p className="md:text-[18px] font-poppins text-center">
              From Highland House to Mandawa Design House, a journey shaped by
              hands, heritage and heart.
            </p>
          </div>
          <Image
            src={"/images/global/heroFlowers.png"}
            width={100}
            height={100}
            alt="flower"
          />
        </div>
        {/*hero section Header END */}
        {/* hero main Content Start */}
        <div className="flex items-center justify-between mb-[28px]">
          <div>
            <Image
              src={"/images/global/image 4.png"}
              width={288}
              height={500}
              alt="mandawa desing house image"
            />
          </div>
          <div className="max-w-[625px] flex flex-col gap-5">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-[#6E2F1B] text-center font-belleza text-2xl">
                The Story of Highland House.
              </h2>
              <h2 className="text-[#6E2F1B] text-center font-belleza text-2xl">
                The birthplace of dreams, designs, and destinies.
              </h2>
            </div>
            <div>
              <p className="text-center font-poppins text-[18px] text-[#666666]">
                In the golden heart of Rajasthan, where desert winds whisper
                through painted havelis and ancient forts, lies the town of
                Mandawa a place steeped in tradition and craft. It was here that
                a visionary named Joel Waldman founded Highland House, a humble
                factory that would quietly shape the future of India’s
                handicraft industry.
              </p>
            </div>
            <div>
              <p className="text-center font-poppins text-[18px] text-[#666666]">
                Highland House was more than just a manufacturing unit, it was a
                cradle of creativity, craftsmanship, and community. It became a
                beacon for talented artisans from across the region , a place
                where skills were not only taught but revered, where hands
                shaped dreams into reality.
              </p>
            </div>
            <div>
              <p className="text-center font-poppins text-[18px] text-[#666666]">
                Within its buzzing workshops, the scent of wood shavings, the
                clinking of chisels against marble, and the weaving of rattan
                filled the air with a sense of purpose. Where craftsmanship was
                a way of life, and every piece created carried the spirit of
                Mandawa’s rich heritage.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/images/global/rectangle 14.png"}
              width={288}
              height={500}
              alt="person on a elephent"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-center font-poppins text-[18px] text-[#666666]">
              Generations of artisans, designers and makers found their footing
              in Highland House. It was a place where mentorship thrived, where
              hard work was honored, and where the seeds of future brands and
              businesses were sown.
            </p>
          </div>
          <div>
            <p className="text-center font-poppins text-[18px] text-[#666666]">
              Though Highland House eventually closed, its spirit did not fade,
              it spread. The talented individuals who honed their craft within
              its walls carried their skills across the country and beyond now
              leading major brands, managing prestigious factories and founding
              successful businesses of their own. Today, many pillars of the
              Indian handicraft and furniture industry trace their roots back to
              the lessons learned at Highland House.
            </p>
          </div>
          <div>
            <p className="text-center font-poppins text-[18px] text-[#666666]">
              Mandawa Design House is proud to be one of them, a living tribute
              to the legacy of Highland House and the artisans it empowered.
            </p>
          </div>
          <div>
            <p className="text-center font-poppins text-[18px] text-[#666666]">
              Even though the factory doors have long since shut, the values,
              vision and craftsmanship of Highland House live on, in every
              lovingly crafted piece of furniture, in every artisan’s journey,
              and in every story built by hand and heart.
            </p>
          </div>
        </div>
        {/* hero main Content END */}
      </div>
    </section>
  );
};

export default Hero;
