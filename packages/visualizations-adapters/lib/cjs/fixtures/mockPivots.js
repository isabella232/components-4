"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockPivots = exports.mockPivotGender = void 0;
var mockPivots = [{
  key: 'cancelled',
  data: {
    'orders.status': 'cancelled'
  },
  is_total: false,
  labels: {
    'orders.status': 'cancelled'
  },
  label: 'Cancelled'
}, {
  key: 'complete',
  data: {
    'orders.status': 'complete'
  },
  is_total: false,
  labels: {
    'orders.status': 'complete'
  },
  label: 'Complete'
}, {
  key: 'pending',
  data: {
    'orders.status': 'pending'
  },
  is_total: false,
  labels: {
    'orders.status': 'pending'
  },
  label: 'Pending'
}];
exports.mockPivots = mockPivots;
var mockPivotGender = [{
  key: 'f',
  data: {
    'users.gender': 'f'
  },
  sort_values: {
    'users.gender': 'f'
  },
  labels: {
    'users.gender': 'f'
  },
  is_total: false,
  metadata: {
    'users.gender': {
      value: 'f'
    }
  }
}, {
  key: 'm',
  data: {
    'users.gender': 'm'
  },
  sort_values: {
    'users.gender': 'm'
  },
  labels: {
    'users.gender': 'm'
  },
  is_total: false,
  metadata: {
    'users.gender': {
      value: 'm'
    }
  }
}, {
  key: 'male',
  data: {
    'users.gender': 'male'
  },
  sort_values: {
    'users.gender': 'male'
  },
  labels: {
    'users.gender': 'male'
  },
  is_total: false,
  metadata: {
    'users.gender': {
      value: 'male'
    }
  }
}];
exports.mockPivotGender = mockPivotGender;
//# sourceMappingURL=mockPivots.js.map