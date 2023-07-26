export const useModalTransitions = () => {
  return {
    opacity: {
      from: () => ({ opacity: 0 }),
      to: () => ({ opacity: 1 })
    },
    transform: {
      from: () => ({
        transform: 'scale(0.9) rotate(8deg)',
        x: -150
      }),
      to: (isOpen: boolean) => ({
        transform: isOpen
          ? 'scale(1.0) rotate(0deg)'
          : 'scale(0.9) rotate(8deg)',
        x: isOpen ? 0 : -150
      }),
    }
  }
}
