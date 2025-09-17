import NightOut from '../Images/Night-out.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dine with
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Confidence
              </span>
              <br />
              Gluten-Free & Worry-Free
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover safe restaurants, read verified reviews, and enjoy dining out without the fear. 
              Your personal gluten-free assistant for stress-free meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              Hello
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="relative"> 
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full animate-pulse shadow-soft"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-primary rounded-full animate-bounce shadow-soft"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;