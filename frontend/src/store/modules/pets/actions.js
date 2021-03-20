export function loadingPets(data) {
  return {
    type: '@pets/LOADING_PETS',
    payload: { data }
  };
}

export function loadingPetsSuccess(data) {
  return {
    type: '@pets/LOADING_SUCCESS',
    payload: { data }
  };
}

export function filterPets(data) {
  return {
    type: '@pets/FILTER_PETS',
    payload: { data }
  };
}

export function filterPetsSuccess(data) {
  return {
    type: '@pets/FILTERED_PETS_SUCCESS',
    payload: { data }
  };
}

