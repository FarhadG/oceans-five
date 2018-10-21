export const getColor = state => ({
  'Yes': 'green',
  'No': 'red'
}[state] || 'grey');