import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-foreground/60">
          Or{" "}
          <Link href="/" className="font-medium text-kinetic hover:text-kinetic/80">
            return to home
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-white/5">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-white/10 rounded-md shadow-sm bg-background placeholder-foreground/30 focus:outline-none focus:ring-kinetic focus:border-kinetic sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-white/10 rounded-md shadow-sm bg-background placeholder-foreground/30 focus:outline-none focus:ring-kinetic focus:border-kinetic sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="discord" className="block text-sm font-medium text-foreground">
                Discord Username (for Inner Circle)
              </label>
              <div className="mt-1">
                <input
                  id="discord"
                  name="discord"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-white/10 rounded-md shadow-sm bg-background placeholder-foreground/30 focus:outline-none focus:ring-kinetic focus:border-kinetic sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-background bg-kinetic hover:bg-kinetic/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kinetic focus:ring-offset-background transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
