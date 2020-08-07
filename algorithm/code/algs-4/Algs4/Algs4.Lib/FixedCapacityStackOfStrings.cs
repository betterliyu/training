using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Algs4.Lib
{
    public class FixedCapacityStackOfStrings : IEnumerable
    {
        private String[] a;  // holds the items
        private int N;       // number of items in stack

        // create an empty stack with given capacity
        public FixedCapacityStackOfStrings(int capacity)
        {
            a = new String[capacity];
            N = 0;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return new FixedCapacityStackEnumerator<String>(a);
        }
    }

    public class FixedCapacityStackEnumerator<TEntity> : IEnumerator<TEntity>
    {
        private TEntity[] _list;
        private int _index;
        private TEntity _current;

        public FixedCapacityStackEnumerator(TEntity[] list)
        {
            _index = 1;
            _list = list;
        }

        public bool MoveNext()
        {
            _index++;
            if (_index == _list.Length) return false;
            TEntity obj = _list[_index];
            if (obj == null) return false;
            return true;
        }

        public void Reset()
        {
            _index = -1;
        }

        TEntity IEnumerator<TEntity>.Current
        {
            get
            {
                _current = _list[_index];
                return _current;
            }
        }

        public Object Current => _current;

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~FixedCapacityStackEnumerator()
        // {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
