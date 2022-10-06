import { useStore } from '../hooks/useStore'
import { Cube } from './Cube'

export const Cubes = () => {
  const [cubes] = useStore(({ cubes }) => [cubes])

  console.log(cubes)
  return (
    <>
      {cubes.map(({ key, position, texture }) => (
        <Cube key={key} position={position} texture={texture} />
      ))}
    </>
  )
}
