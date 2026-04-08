import { Typography } from '@snowball-tech/fractal'

const HomePage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
    <Typography variant="display-1">Snowball Invest</Typography>

    <Typography variant="body-1">
      Bienvenue sur le test technique Snowball
    </Typography>

    <Typography className="text-placeholder" variant="body-2">
      C&apos;est ici que tout commence...
    </Typography>
  </main>
)

export default HomePage
