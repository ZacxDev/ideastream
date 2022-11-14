
local_resource(
  'ideastream.xyz',
  serve_cmd='cd ui/ideastream.xyz && npm run watch',
  labels=['ui'],
  allow_parallel=True,
)

local_resource(
  'Hardhat Node',
  serve_cmd='npx hardhat node',
  labels=['hardhat'],
  allow_parallel=True,
  readiness_probe=probe(
    period_secs=5,
    http_get=http_get_action(port=8545, path="/")
  ),
)

local_resource(
  'Hardhat Deploy Local',
  cmd='npx hardhat run --network localhost scripts/deploy.ts',
  labels=['hardhat'],
  resource_deps = ['Hardhat Node'],
)

