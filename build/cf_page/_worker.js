const 域名 = 'p.692.cloudns.be';
const 路径 = 'p';
const workerHandler = {
    async fetch(request, env) {
        const url = new URL(request.url);
        return await requestProcessor.fetch(request);
    }
};
export { workerHandler as default };
const a0_0x445256 = function () {
    let _0x505d9b = true;
    return function (_0x503687, _0xe569b9) {
        const _0x1eb6c7 = _0x505d9b ? function () {
            if (_0xe569b9) {
                const _0x132219 = _0xe569b9.apply(_0x503687, arguments);
                _0xe569b9 = null;
                return _0x132219;
            }
        } : function () { };
        _0x505d9b = false;
        return _0x1eb6c7;
    };
}();
(function () {
    a0_0x445256(this, function () {
        const _0x3de2ec = new RegExp("function *\\( *\\)");
        const _0x46fdeb = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
        const _0x675706 = a0_0x3f64cf("init");
        if (!_0x3de2ec.test(_0x675706 + "chain") || !_0x46fdeb.test(_0x675706 + "input")) {
            _0x675706('0');
        } else {
            a0_0x3f64cf();
        }
    })();
})();
var a0_0x1ada38 = {
    'Stringify': 0x1,
    'BeforeStream': 0x2,
    'Stream': 0x3
};
var a0_0x45e189 = (_0x19674b, _0x18b339) => {
    const _0x64b6fc = new String(_0x19674b);
    _0x64b6fc.isEscaped = true;
    _0x64b6fc.callbacks = _0x18b339;
    return _0x64b6fc;
};
var a0_0x51e6eb = async (_0x25c223, _0x4da5cc, _0x586797, _0x2a0a6f, _0x5743f3) => {
    const _0x260c02 = _0x25c223.callbacks;
    if (!_0x260c02?.["length"]) {
        return Promise.resolve(_0x25c223);
    }
    if (_0x5743f3) {
        _0x5743f3[0x0] += _0x25c223;
    } else {
        _0x5743f3 = [_0x25c223];
    }
    const _0x82a4a0 = Promise.all(_0x260c02.map(_0x25d3fb => _0x25d3fb({
        'phase': _0x4da5cc,
        'buffer': _0x5743f3,
        'context': _0x2a0a6f
    }))).then(_0x4b2a4f => Promise.all(_0x4b2a4f.filter(Boolean).map(_0xd46c61 => a0_0x51e6eb(_0xd46c61, _0x4da5cc, false, _0x2a0a6f, _0x5743f3))).then(() => _0x5743f3[0x0]));
    if (_0x586797) {
        return a0_0x45e189(await _0x82a4a0, _0x260c02);
    } else {
        return _0x82a4a0;
    }
};
var a0_0x3d3671 = (_0x91e604, _0x58683a, _0x3a421f) => {
    if (!_0x58683a.has(_0x91e604)) {
        throw TypeError("Cannot " + _0x3a421f);
    }
};
var a0_0x4a4a29 = (_0x33a789, _0x39a4a4, _0x3ae147) => {
    a0_0x3d3671(_0x33a789, _0x39a4a4, "read from private field");
    return _0x3ae147 ? _0x3ae147.call(_0x33a789) : _0x39a4a4.get(_0x33a789);
};
var a0_0x2fcd3f = (_0xce653c, _0x548cbf, _0x3dff72) => {
    if (_0x548cbf.has(_0xce653c)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    if (_0x548cbf instanceof WeakSet) {
        _0x548cbf.add(_0xce653c);
    } else {
        _0x548cbf.set(_0xce653c, _0x3dff72);
    }
};
var a0_0x2cff3d = (_0x3d8c25, _0x2b1cd5, _0x37b32c, _0x465865) => {
    a0_0x3d3671(_0x3d8c25, _0x2b1cd5, "write to private field");
    if (_0x465865) {
        _0x465865.call(_0x3d8c25, _0x37b32c);
    } else {
        _0x2b1cd5.set(_0x3d8c25, _0x37b32c);
    }
    return _0x37b32c;
};
var a0_0x4938ee = (_0x4f4a8a, _0x2c799e = {}) => {
    Object.entries(_0x2c799e).forEach(([_0x34ec7d, _0x28fccb]) => _0x4f4a8a.set(_0x34ec7d, _0x28fccb));
    return _0x4f4a8a;
};
var a0_0x5bbbac;
var a0_0x17021e;
var a0_0xb221dc;
var a0_0x455402;
var a0_0x216b28;
var a0_0x4cb167;
var a0_0x46ed0e = class {
    constructor(_0xbf94ae, _0x2632fc) {
        this.env = {};
        this._var = {};
        this.finalized = false;
        this.error = undefined;
        a0_0x2fcd3f(this, a0_0x5bbbac, 0xc8);
        a0_0x2fcd3f(this, a0_0x17021e, undefined);
        a0_0x2fcd3f(this, a0_0xb221dc, undefined);
        a0_0x2fcd3f(this, a0_0x455402, undefined);
        a0_0x2fcd3f(this, a0_0x216b28, undefined);
        a0_0x2fcd3f(this, a0_0x4cb167, true);
        this.layout = undefined;
        this.renderer = _0x4d08d7 => this.html(_0x4d08d7);
        this.notFoundHandler = () => new Response();
        this.render = (..._0xbebd80) => this.renderer(..._0xbebd80);
        this.setLayout = _0x14f60c => this.layout = _0x14f60c;
        this.getLayout = () => this.layout;
        this.setRenderer = _0x498172 => {
            this.renderer = _0x498172;
        };
        this.header = (_0x359103, _0x2cd8e6, _0x7a9c) => {
            if (_0x2cd8e6 === undefined) {
                if (a0_0x4a4a29(this, a0_0xb221dc)) {
                    a0_0x4a4a29(this, a0_0xb221dc)["delete"](_0x359103);
                } else if (a0_0x4a4a29(this, a0_0x455402)) {
                    delete a0_0x4a4a29(this, a0_0x455402)[_0x359103.toLocaleLowerCase()];
                }
                if (this.finalized) {
                    this.res.headers["delete"](_0x359103);
                }
                return;
            }
            if (_0x7a9c?.["append"]) {
                if (!a0_0x4a4a29(this, a0_0xb221dc)) {
                    a0_0x2cff3d(this, a0_0x4cb167, false);
                    a0_0x2cff3d(this, a0_0xb221dc, new Headers(a0_0x4a4a29(this, a0_0x455402)));
                    a0_0x2cff3d(this, a0_0x455402, {});
                }
                a0_0x4a4a29(this, a0_0xb221dc).append(_0x359103, _0x2cd8e6);
            } else if (a0_0x4a4a29(this, a0_0xb221dc)) {
                a0_0x4a4a29(this, a0_0xb221dc).set(_0x359103, _0x2cd8e6);
            } else {
                a0_0x4a4a29(this, a0_0x455402) ?? a0_0x2cff3d(this, a0_0x455402, {});
                a0_0x4a4a29(this, a0_0x455402)[_0x359103.toLowerCase()] = _0x2cd8e6;
            }
            if (this.finalized) {
                if (_0x7a9c?.["append"]) {
                    this.res.headers.append(_0x359103, _0x2cd8e6);
                } else {
                    this.res.headers.set(_0x359103, _0x2cd8e6);
                }
            }
        };
        this.status = _0x1493c3 => {
            a0_0x2cff3d(this, a0_0x4cb167, false);
            a0_0x2cff3d(this, a0_0x5bbbac, _0x1493c3);
        };
        this.set = (_0x1f5482, _0x2d259d) => {
            this._var ?? (this._var = {});
            this._var[_0x1f5482] = _0x2d259d;
        };
        this.get = _0x4de269 => {
            return this._var ? this._var[_0x4de269] : undefined;
        };
        this.newResponse = (_0x3f7083, _0x44c8ce, _0x259e20) => {
            if (a0_0x4a4a29(this, a0_0x4cb167) && !_0x259e20 && !_0x44c8ce && a0_0x4a4a29(this, a0_0x5bbbac) === 0xc8) {
                return new Response(_0x3f7083, {
                    'headers': a0_0x4a4a29(this, a0_0x455402)
                });
            }
            if (_0x44c8ce && typeof _0x44c8ce !== 'number') {
                const _0x2a3e33 = a0_0x4938ee(new Headers(_0x44c8ce.headers), a0_0x4a4a29(this, a0_0x455402));
                return new Response(_0x3f7083, {
                    'headers': _0x2a3e33,
                    'status': _0x44c8ce.status ?? a0_0x4a4a29(this, a0_0x5bbbac)
                });
            }
            const _0x30b3ae = typeof _0x44c8ce === "number" ? _0x44c8ce : a0_0x4a4a29(this, a0_0x5bbbac);
            a0_0x4a4a29(this, a0_0x455402) ?? a0_0x2cff3d(this, a0_0x455402, {});
            a0_0x4a4a29(this, a0_0xb221dc) ?? a0_0x2cff3d(this, a0_0xb221dc, new Headers());
            a0_0x4938ee(a0_0x4a4a29(this, a0_0xb221dc), a0_0x4a4a29(this, a0_0x455402));
            if (a0_0x4a4a29(this, a0_0x216b28)) {
                a0_0x4a4a29(this, a0_0x216b28).headers.forEach((_0x4d1d5e, _0x4d4151) => {
                    a0_0x4a4a29(this, a0_0xb221dc)?.["set"](_0x4d4151, _0x4d1d5e);
                });
                a0_0x4938ee(a0_0x4a4a29(this, a0_0xb221dc), a0_0x4a4a29(this, a0_0x455402));
            }
            _0x259e20 ?? (_0x259e20 = {});
            for (const [_0x3f7830, _0x1ec231] of Object.entries(_0x259e20)) {
                if (typeof _0x1ec231 === "string") {
                    a0_0x4a4a29(this, a0_0xb221dc).set(_0x3f7830, _0x1ec231);
                } else {
                    a0_0x4a4a29(this, a0_0xb221dc)["delete"](_0x3f7830);
                    for (const _0x142cf8 of _0x1ec231) {
                        a0_0x4a4a29(this, a0_0xb221dc).append(_0x3f7830, _0x142cf8);
                    }
                }
            }
            return new Response(_0x3f7083, {
                'status': _0x30b3ae,
                'headers': a0_0x4a4a29(this, a0_0xb221dc)
            });
        };
        this.body = (_0x455ad1, _0x35b58b, _0xa0aaa7) => {
            return typeof _0x35b58b === "number" ? this.newResponse(_0x455ad1, _0x35b58b, _0xa0aaa7) : this.newResponse(_0x455ad1, _0x35b58b);
        };
        this.text = (_0x222acd, _0x3785fd, _0x2fe769) => {
            if (!a0_0x4a4a29(this, a0_0x455402)) {
                if (a0_0x4a4a29(this, a0_0x4cb167) && !_0x2fe769 && !_0x3785fd) {
                    return new Response(_0x222acd);
                }
                a0_0x2cff3d(this, a0_0x455402, {});
            }
            a0_0x4a4a29(this, a0_0x455402)["content-type"] = "text/plain; charset=UTF-8";
            return typeof _0x3785fd === "number" ? this.newResponse(_0x222acd, _0x3785fd, _0x2fe769) : this.newResponse(_0x222acd, _0x3785fd);
        };
        this.json = (_0x5cee54, _0x589574, _0x555a12) => {
            const _0x1f72ba = JSON.stringify(_0x5cee54);
            a0_0x4a4a29(this, a0_0x455402) ?? a0_0x2cff3d(this, a0_0x455402, {});
            a0_0x4a4a29(this, a0_0x455402)['content-type'] = "application/json; charset=UTF-8";
            return typeof _0x589574 === "number" ? this.newResponse(_0x1f72ba, _0x589574, _0x555a12) : this.newResponse(_0x1f72ba, _0x589574);
        };
        this.html = (_0xefbe73, _0x2e2daa, _0x12aa3b) => {
            a0_0x4a4a29(this, a0_0x455402) ?? a0_0x2cff3d(this, a0_0x455402, {});
            a0_0x4a4a29(this, a0_0x455402)["content-type"] = "text/html; charset=UTF-8";
            if (typeof _0xefbe73 === "object") {
                if (!(_0xefbe73 instanceof Promise)) {
                    _0xefbe73 = _0xefbe73.toString();
                }
                if (_0xefbe73 instanceof Promise) {
                    return _0xefbe73.then(_0x412cf3 => a0_0x51e6eb(_0x412cf3, 0x1, false, {})).then(_0x134d87 => {
                        return typeof _0x2e2daa === 'number' ? this.newResponse(_0x134d87, _0x2e2daa, _0x12aa3b) : this.newResponse(_0x134d87, _0x2e2daa);
                    });
                }
            }
            return typeof _0x2e2daa === "number" ? this.newResponse(_0xefbe73, _0x2e2daa, _0x12aa3b) : this.newResponse(_0xefbe73, _0x2e2daa);
        };
        this.redirect = (_0xb5e82c, _0x364f51 = 0x12e) => {
            a0_0x4a4a29(this, a0_0xb221dc) ?? a0_0x2cff3d(this, a0_0xb221dc, new Headers());
            a0_0x4a4a29(this, a0_0xb221dc).set("Location", _0xb5e82c);
            return this.newResponse(null, _0x364f51);
        };
        this.notFound = () => {
            return this.notFoundHandler(this);
        };
        this.req = _0xbf94ae;
        if (_0x2632fc) {
            a0_0x2cff3d(this, a0_0x17021e, _0x2632fc.executionCtx);
            this.env = _0x2632fc.env;
            if (_0x2632fc.notFoundHandler) {
                this.notFoundHandler = _0x2632fc.notFoundHandler;
            }
        }
    }
    get ['event']() {
        if (a0_0x4a4a29(this, a0_0x17021e) && "respondWith" in a0_0x4a4a29(this, a0_0x17021e)) {
            return a0_0x4a4a29(this, a0_0x17021e);
        } else {
            throw Error("This context has no FetchEvent");
        }
    }
    get ["executionCtx"]() {
        if (a0_0x4a4a29(this, a0_0x17021e)) {
            return a0_0x4a4a29(this, a0_0x17021e);
        } else {
            throw Error("This context has no ExecutionContext");
        }
    }
    get ["res"]() {
        a0_0x2cff3d(this, a0_0x4cb167, false);
        return a0_0x4a4a29(this, a0_0x216b28) || a0_0x2cff3d(this, a0_0x216b28, new Response("404 Not Found", {
            'status': 0x194
        }));
    }
    set ["res"](_0x10a9d5) {
        a0_0x2cff3d(this, a0_0x4cb167, false);
        if (a0_0x4a4a29(this, a0_0x216b28) && _0x10a9d5) {
            a0_0x4a4a29(this, a0_0x216b28).headers["delete"]("content-type");
            for (const [_0xc0647c, _0x75c875] of a0_0x4a4a29(this, a0_0x216b28).headers.entries()) {
                if (_0xc0647c === "set-cookie") {
                    const _0x224b4e = a0_0x4a4a29(this, a0_0x216b28).headers.getSetCookie();
                    _0x10a9d5.headers["delete"]('set-cookie');
                    for (const _0xa34220 of _0x224b4e) {
                        _0x10a9d5.headers.append("set-cookie", _0xa34220);
                    }
                } else {
                    _0x10a9d5.headers.set(_0xc0647c, _0x75c875);
                }
            }
        }
        a0_0x2cff3d(this, a0_0x216b28, _0x10a9d5);
        this.finalized = true;
    }
    get ["var"]() {
        return {
            ...this._var
        };
    }
};
a0_0x5bbbac = new WeakMap();
a0_0x17021e = new WeakMap();
a0_0xb221dc = new WeakMap();
a0_0x455402 = new WeakMap();
a0_0x216b28 = new WeakMap();
a0_0x4cb167 = new WeakMap();
var a0_0x3e0f9d = (_0x4c96c3, _0x3c3c65, _0x1d1456) => {
    return (_0xdc2093, _0x40b530) => {
        let _0x6ea30 = -0x1;
        return _0x2a59cf(0x0);
        async function _0x2a59cf(_0x4eb25b) {
            if (_0x4eb25b <= _0x6ea30) {
                throw new Error("next() called multiple times");
            }
            _0x6ea30 = _0x4eb25b;
            let _0x57f8b1;
            let _0x4d049d = false;
            let _0x1b5007;
            if (_0x4c96c3[_0x4eb25b]) {
                _0x1b5007 = _0x4c96c3[_0x4eb25b][0x0][0x0];
                if (_0xdc2093 instanceof a0_0x46ed0e) {
                    _0xdc2093.req.routeIndex = _0x4eb25b;
                }
            } else {
                _0x1b5007 = _0x4eb25b === _0x4c96c3.length && _0x40b530 || undefined;
            }
            if (!_0x1b5007) {
                if (_0xdc2093 instanceof a0_0x46ed0e && _0xdc2093.finalized === false && _0x1d1456) {
                    _0x57f8b1 = await _0x1d1456(_0xdc2093);
                }
            } else {
                try {
                    _0x57f8b1 = await _0x1b5007(_0xdc2093, () => {
                        return _0x2a59cf(_0x4eb25b + 0x1);
                    });
                } catch (_0x32ca7f) {
                    if (_0x32ca7f instanceof Error && _0xdc2093 instanceof a0_0x46ed0e && _0x3c3c65) {
                        _0xdc2093.error = _0x32ca7f;
                        _0x57f8b1 = await _0x3c3c65(_0x32ca7f, _0xdc2093);
                        _0x4d049d = true;
                    } else {
                        throw _0x32ca7f;
                    }
                }
            }
            if (_0x57f8b1 && (_0xdc2093.finalized === false || _0x4d049d)) {
                _0xdc2093.res = _0x57f8b1;
            }
            return _0xdc2093;
        }
    };
};
var a0_0x4fe853 = class extends Error {
    constructor(_0x4074ce = 0x1f4, _0x45b115) {
        super(_0x45b115?.["message"]);
        this.res = _0x45b115?.["res"];
        this.status = _0x4074ce;
    }
    ["getResponse"]() {
        if (this.res) {
            return this.res;
        }
        return new Response(this.message, {
            'status': this.status
        });
    }
};
var a0_0x55a087 = async (_0x6f122b, _0x402f3c = {
    'all': false
}) => {
    const _0x4500ff = _0x6f122b instanceof a0_0x55ff6c ? _0x6f122b.raw.headers : _0x6f122b.headers;
    const _0x27284a = _0x4500ff.get("Content-Type");
    if (a0_0x601ce8(_0x27284a)) {
        return a0_0x1b177f(_0x6f122b, _0x402f3c);
    }
    return {};
};
function a0_0x601ce8(_0x50224e) {
    if (_0x50224e === null) {
        return false;
    }
    return _0x50224e.startsWith("multipart/form-data") || _0x50224e.startsWith('application/x-www-form-urlencoded');
}
async function a0_0x1b177f(_0x4452a3, _0x113f1d) {
    const _0x2c0528 = await _0x4452a3.formData();
    if (_0x2c0528) {
        return a0_0x1c4d87(_0x2c0528, _0x113f1d);
    }
    return {};
}
function a0_0x1c4d87(_0x1266d5, _0x52fc4f) {
    const _0x45426a = {};
    _0x1266d5.forEach((_0x1b0e8b, _0xe511cb) => {
        const _0x6c3edc = _0x52fc4f.all || _0xe511cb.endsWith('[]');
        if (!_0x6c3edc) {
            _0x45426a[_0xe511cb] = _0x1b0e8b;
        } else {
            a0_0x5017a5(_0x45426a, _0xe511cb, _0x1b0e8b);
        }
    });
    return _0x45426a;
}
var a0_0x5017a5 = (_0xf465b2, _0x24329b, _0x3303d) => {
    if (_0xf465b2[_0x24329b] && Array.isArray(_0xf465b2[_0x24329b])) {
        a0_0x260c6c(_0xf465b2[_0x24329b], _0x3303d);
    } else if (_0xf465b2[_0x24329b]) {
        a0_0x40d0bd(_0xf465b2, _0x24329b, _0x3303d);
    } else {
        _0xf465b2[_0x24329b] = _0x3303d;
    }
};
function a0_0x3d8b84(_0xfa83bc) {
    return Array.isArray(_0xfa83bc);
}
var a0_0x260c6c = (_0x13d46a, _0x3468f5) => {
    _0x13d46a.push(_0x3468f5);
};
var a0_0x40d0bd = (_0x5d71b8, _0x4242fc, _0x397e38) => {
    _0x5d71b8[_0x4242fc] = [_0x5d71b8[_0x4242fc], _0x397e38];
};
var a0_0x2126cc = _0x27e5da => {
    const _0x3821bf = _0x27e5da.split('/');
    if (_0x3821bf[0x0] === '') {
        _0x3821bf.shift();
    }
    return _0x3821bf;
};
var a0_0x4012f9 = _0x5e7a9a => {
    const {
        groups: _0xf41ca7,
        path: _0x35a349
    } = a0_0x15befb(_0x5e7a9a);
    const _0x21f273 = a0_0x2126cc(_0x35a349);
    return a0_0x882145(_0x21f273, _0xf41ca7);
};
var a0_0x15befb = _0x20877d => {
    const _0x54d556 = [];
    _0x20877d = _0x20877d.replace(/\{[^}]+\}/g, (_0x13aec4, _0x257fa6) => {
        const _0xedcb21 = '@' + _0x257fa6;
        _0x54d556.push([_0xedcb21, _0x13aec4]);
        return _0xedcb21;
    });
    return {
        'groups': _0x54d556,
        'path': _0x20877d
    };
};
var a0_0x882145 = (_0x12681b, _0x47d71a) => {
    for (let _0x1f0c3d = _0x47d71a.length - 0x1; _0x1f0c3d >= 0x0; _0x1f0c3d--) {
        const [_0x4c2d3e] = _0x47d71a[_0x1f0c3d];
        for (let _0x4cc39c = _0x12681b.length - 0x1; _0x4cc39c >= 0x0; _0x4cc39c--) {
            if (_0x12681b[_0x4cc39c].includes(_0x4c2d3e)) {
                _0x12681b[_0x4cc39c] = _0x12681b[_0x4cc39c].replace(_0x4c2d3e, _0x47d71a[_0x1f0c3d][0x1]);
                break;
            }
        }
    }
    return _0x12681b;
};
var a0_0x4ab5a3 = {};
var a0_0x31ecc6 = _0x59152a => {
    if (_0x59152a === '*') {
        return '*';
    }
    const _0x225909 = _0x59152a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    if (_0x225909) {
        if (!a0_0x4ab5a3[_0x59152a]) {
            if (_0x225909[0x2]) {
                a0_0x4ab5a3[_0x59152a] = [_0x59152a, _0x225909[0x1], new RegExp('^' + _0x225909[0x2] + '$')];
            } else {
                a0_0x4ab5a3[_0x59152a] = [_0x59152a, _0x225909[0x1], true];
            }
        }
        return a0_0x4ab5a3[_0x59152a];
    }
    return null;
};
var a0_0x14d390 = _0x1710c7 => {
    const _0x53a53d = _0x1710c7.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
    return _0x53a53d ? _0x53a53d[0x1] : '';
};
var a0_0xb712b0 = _0x134e68 => {
    const _0x50f48d = _0x134e68.indexOf('?', 0x8);
    return _0x50f48d === -0x1 ? '' : '?' + _0x134e68.slice(_0x50f48d + 0x1);
};
var a0_0x1b3552 = _0x3e6de8 => {
    const _0x1a2b41 = a0_0x14d390(_0x3e6de8);
    return _0x1a2b41.length > 0x1 && _0x1a2b41[_0x1a2b41.length - 0x1] === '/' ? _0x1a2b41.slice(0x0, -0x1) : _0x1a2b41;
};
var a0_0x29d579 = (..._0x20205d) => {
    let _0x45388c = '';
    let _0x37963c = false;
    for (let _0x32b718 of _0x20205d) {
        if (_0x45388c[_0x45388c.length - 0x1] === '/') {
            _0x45388c = _0x45388c.slice(0x0, -0x1);
            _0x37963c = true;
        }
        if (_0x32b718[0x0] !== '/') {
            _0x32b718 = '/' + _0x32b718;
        }
        if (_0x32b718 === '/' && _0x37963c) {
            _0x45388c = _0x45388c + '/';
        } else if (_0x32b718 !== '/') {
            _0x45388c = '' + _0x45388c + _0x32b718;
        }
        if (_0x32b718 === '/' && _0x45388c === '') {
            _0x45388c = '/';
        }
    }
    return _0x45388c;
};
var a0_0x42e93f = _0x172bfe => {
    if (!_0x172bfe.match(/\:.+\?$/)) {
        return null;
    }
    const _0x2742c3 = _0x172bfe.split('/');
    const _0x3f4521 = [];
    let _0x535ec6 = '';
    _0x2742c3.forEach(_0x658e01 => {
        if (_0x658e01 !== '' && !/\:/.test(_0x658e01)) {
            _0x535ec6 += '/' + _0x658e01;
        } else {
            if (/\:/.test(_0x658e01)) {
                if (/\?/.test(_0x658e01)) {
                    if (_0x3f4521.length === 0x0 && _0x535ec6 === '') {
                        _0x3f4521.push('/');
                    } else {
                        _0x3f4521.push(_0x535ec6);
                    }
                    const _0x3e7e34 = _0x658e01.replace('?', '');
                    _0x535ec6 += '/' + _0x3e7e34;
                    _0x3f4521.push(_0x535ec6);
                } else {
                    _0x535ec6 += '/' + _0x658e01;
                }
            }
        }
    });
    return _0x3f4521.filter((_0x1e0905, _0x5ec1a9, _0x199be3) => _0x199be3.indexOf(_0x1e0905) === _0x5ec1a9);
};
var a0_0x2f369 = _0x2e46e1 => {
    if (!/[%+]/.test(_0x2e46e1)) {
        return _0x2e46e1;
    }
    if (_0x2e46e1.indexOf('+') !== -0x1) {
        _0x2e46e1 = _0x2e46e1.replace(/\+/g, " ");
    }
    return /%/.test(_0x2e46e1) ? decodeURIComponent(_0x2e46e1) : _0x2e46e1;
};
var a0_0x1efb8a = (_0x526e05, _0x4e94c5, _0x3d9deb) => {
    let _0x3f2805;
    if (!_0x3d9deb && _0x4e94c5 && !/[%+]/.test(_0x4e94c5)) {
        let _0x106269 = _0x526e05.indexOf('?' + _0x4e94c5, 0x8);
        if (_0x106269 === -0x1) {
            _0x106269 = _0x526e05.indexOf('&' + _0x4e94c5, 0x8);
        }
        while (_0x106269 !== -0x1) {
            const _0x410ae6 = _0x526e05.charCodeAt(_0x106269 + _0x4e94c5.length + 0x1);
            if (_0x410ae6 === 0x3d) {
                const _0x5d8136 = _0x106269 + _0x4e94c5.length + 0x2;
                const _0x1578ec = _0x526e05.indexOf('&', _0x5d8136);
                return a0_0x2f369(_0x526e05.slice(_0x5d8136, _0x1578ec === -0x1 ? undefined : _0x1578ec));
            } else {
                if (_0x410ae6 == 0x26 || isNaN(_0x410ae6)) {
                    return '';
                }
            }
            _0x106269 = _0x526e05.indexOf('&' + _0x4e94c5, _0x106269 + 0x1);
        }
        _0x3f2805 = /[%+]/.test(_0x526e05);
        if (!_0x3f2805) {
            return undefined;
        }
    }
    const _0x3484b7 = {};
    _0x3f2805 ?? (_0x3f2805 = /[%+]/.test(_0x526e05));
    let _0x218cff = _0x526e05.indexOf('?', 0x8);
    while (_0x218cff !== -0x1) {
        const _0x3be4ec = _0x526e05.indexOf('&', _0x218cff + 0x1);
        let _0x26320c = _0x526e05.indexOf('=', _0x218cff);
        if (_0x26320c > _0x3be4ec && _0x3be4ec !== -0x1) {
            _0x26320c = -0x1;
        }
        let _0x12ba82 = _0x526e05.slice(_0x218cff + 0x1, _0x26320c === -0x1 ? _0x3be4ec === -0x1 ? undefined : _0x3be4ec : _0x26320c);
        if (_0x3f2805) {
            _0x12ba82 = a0_0x2f369(_0x12ba82);
        }
        _0x218cff = _0x3be4ec;
        if (_0x12ba82 === '') {
            continue;
        }
        let _0x7e5972;
        if (_0x26320c === -0x1) {
            _0x7e5972 = '';
        } else {
            _0x7e5972 = _0x526e05.slice(_0x26320c + 0x1, _0x3be4ec === -0x1 ? undefined : _0x3be4ec);
            if (_0x3f2805) {
                _0x7e5972 = a0_0x2f369(_0x7e5972);
            }
        }
        if (_0x3d9deb) {
            if (!(_0x3484b7[_0x12ba82] && Array.isArray(_0x3484b7[_0x12ba82]))) {
                _0x3484b7[_0x12ba82] = [];
            }
            ;
            _0x3484b7[_0x12ba82].push(_0x7e5972);
        } else {
            _0x3484b7[_0x12ba82] ?? (_0x3484b7[_0x12ba82] = _0x7e5972);
        }
    }
    return _0x4e94c5 ? _0x3484b7[_0x4e94c5] : _0x3484b7;
};
var a0_0x604487 = (_0x3d2219, _0x3ad81b) => {
    return a0_0x1efb8a(_0x3d2219, _0x3ad81b, true);
};
var a0_0x38c402 = (_0x2d62c8, _0x1070fb, _0x2e42e9) => {
    if (!_0x1070fb.has(_0x2d62c8)) {
        throw TypeError("Cannot " + _0x2e42e9);
    }
};
var a0_0x5868bd = (_0x4b58c7, _0x456b3d, _0x42cc12) => {
    a0_0x38c402(_0x4b58c7, _0x456b3d, "read from private field");
    return _0x42cc12 ? _0x42cc12.call(_0x4b58c7) : _0x456b3d.get(_0x4b58c7);
};
var a0_0x1d0022 = (_0x1cb2da, _0xdcedb4, _0x358d9e) => {
    if (_0xdcedb4.has(_0x1cb2da)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    if (_0xdcedb4 instanceof WeakSet) {
        _0xdcedb4.add(_0x1cb2da);
    } else {
        _0xdcedb4.set(_0x1cb2da, _0x358d9e);
    }
};
var a0_0x4acfee = (_0x5d4ea, _0x544b64, _0x3dc894, _0x10d101) => {
    a0_0x38c402(_0x5d4ea, _0x544b64, "write to private field");
    if (_0x10d101) {
        _0x10d101.call(_0x5d4ea, _0x3dc894);
    } else {
        _0x544b64.set(_0x5d4ea, _0x3dc894);
    }
    return _0x3dc894;
};
var a0_0x335e3d;
var a0_0x4aa8fa;
var a0_0x55ff6c = class {
    constructor(_0x282c3f, _0x5ef3fd = '/', _0x5d3095 = [[]]) {
        a0_0x1d0022(this, a0_0x335e3d, undefined);
        a0_0x1d0022(this, a0_0x4aa8fa, undefined);
        this.routeIndex = 0x0;
        this.bodyCache = {};
        this.cachedBody = _0xb1d5d0 => {
            const {
                bodyCache: _0x37a6fa,
                raw: _0x3d7494
            } = this;
            const _0x220fbc = _0x37a6fa[_0xb1d5d0];
            if (_0x220fbc) {
                return _0x220fbc;
            }
            if (_0x37a6fa.arrayBuffer) {
                return (async () => {
                    return await new Response(_0x37a6fa.arrayBuffer)[_0xb1d5d0]();
                })();
            }
            return _0x37a6fa[_0xb1d5d0] = _0x3d7494[_0xb1d5d0]();
        };
        this.raw = _0x282c3f;
        this.path = _0x5ef3fd;
        a0_0x4acfee(this, a0_0x4aa8fa, _0x5d3095);
        a0_0x4acfee(this, a0_0x335e3d, {});
    }
    ["param"](_0x20437b) {
        return _0x20437b ? this.getDecodedParam(_0x20437b) : this.getAllDecodedParams();
    }
    ["getDecodedParam"](_0x479efb) {
        const _0x1c54a2 = a0_0x5868bd(this, a0_0x4aa8fa)[0x0][this.routeIndex][0x1][_0x479efb];
        const _0x2b4efd = this.getParamValue(_0x1c54a2);
        return _0x2b4efd ? /\%/.test(_0x2b4efd) ? decodeURIComponent(_0x2b4efd) : _0x2b4efd : undefined;
    }
    ["getAllDecodedParams"]() {
        const _0x577e0b = {};
        const _0x23da83 = Object.keys(a0_0x5868bd(this, a0_0x4aa8fa)[0x0][this.routeIndex][0x1]);
        for (const _0x4b4f88 of _0x23da83) {
            const _0x10fbe1 = this.getParamValue(a0_0x5868bd(this, a0_0x4aa8fa)[0x0][this.routeIndex][0x1][_0x4b4f88]);
            if (_0x10fbe1 && typeof _0x10fbe1 === "string") {
                _0x577e0b[_0x4b4f88] = /\%/.test(_0x10fbe1) ? decodeURIComponent(_0x10fbe1) : _0x10fbe1;
            }
        }
        return _0x577e0b;
    }
    ['getParamValue'](_0x1e84dd) {
        return a0_0x5868bd(this, a0_0x4aa8fa)[0x1] ? a0_0x5868bd(this, a0_0x4aa8fa)[0x1][_0x1e84dd] : _0x1e84dd;
    }
    ['query'](_0x2f352e) {
        return a0_0x1efb8a(this.url, _0x2f352e);
    }
    ["queries"](_0xa96879) {
        return a0_0x1efb8a(this.url, _0xa96879, true);
    }
    ["header"](_0x256920) {
        if (_0x256920) {
            return this.raw.headers.get(_0x256920.toLowerCase()) ?? undefined;
        }
        const _0x5e8e77 = {};
        this.raw.headers.forEach((_0x117e7e, _0x5153c7) => {
            _0x5e8e77[_0x5153c7] = _0x117e7e;
        });
        return _0x5e8e77;
    }
    async ["parseBody"](_0x499697) {
        if (this.bodyCache.parsedBody) {
            return this.bodyCache.parsedBody;
        }
        const _0x586510 = await a0_0x55a087(this, _0x499697);
        this.bodyCache.parsedBody = _0x586510;
        return _0x586510;
    }
    ["json"]() {
        return this.cachedBody("json");
    }
    ['text']() {
        return this.cachedBody("text");
    }
    ["arrayBuffer"]() {
        return this.cachedBody('arrayBuffer');
    }
    ["blob"]() {
        return this.cachedBody('blob');
    }
    ["formData"]() {
        return this.cachedBody("formData");
    }
    ["addValidatedData"](_0x524f7f, _0x2cc262) {
        a0_0x5868bd(this, a0_0x335e3d)[_0x524f7f] = _0x2cc262;
    }
    ['valid'](_0x177ae1) {
        return a0_0x5868bd(this, a0_0x335e3d)[_0x177ae1];
    }
    get ["url"]() {
        return this.raw.url;
    }
    get ["method"]() {
        return this.raw.method;
    }
    get ["matchedRoutes"]() {
        return a0_0x5868bd(this, a0_0x4aa8fa)[0x0].map(([[, _0x46d063]]) => _0x46d063);
    }
    get ["routePath"]() {
        return a0_0x5868bd(this, a0_0x4aa8fa)[0x0].map(([[, _0x1dba73]]) => _0x1dba73)[this.routeIndex].path;
    }
};
a0_0x335e3d = new WeakMap();
a0_0x4aa8fa = new WeakMap();
var a0_0x4ef4dc = ['get', "post", "put", "delete", "options", "patch"];
var a0_0x200727 = class extends Error { };
var a0_0x464b30 = (_0x44e6f1, _0x31a4e9, _0x4346f3) => {
    if (!_0x31a4e9.has(_0x44e6f1)) {
        throw TypeError("Cannot " + _0x4346f3);
    }
};
var a0_0x110ed4 = (_0x8a1608, _0xd91bdd, _0x2d199d) => {
    a0_0x464b30(_0x8a1608, _0xd91bdd, "read from private field");
    return _0x2d199d ? _0x2d199d.call(_0x8a1608) : _0xd91bdd.get(_0x8a1608);
};
var a0_0x4c31e5 = (_0x4ff092, _0x162411, _0x20a461) => {
    if (_0x162411.has(_0x4ff092)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    if (_0x162411 instanceof WeakSet) {
        _0x162411.add(_0x4ff092);
    } else {
        _0x162411.set(_0x4ff092, _0x20a461);
    }
};
var a0_0x4cd819 = (_0xd0f35b, _0x1f6bab, _0x6c59f4, _0x304975) => {
    a0_0x464b30(_0xd0f35b, _0x1f6bab, "write to private field");
    if (_0x304975) {
        _0x304975.call(_0xd0f35b, _0x6c59f4);
    } else {
        _0x1f6bab.set(_0xd0f35b, _0x6c59f4);
    }
    return _0x6c59f4;
};
var a0_0xd2be31 = Symbol("composedHandler");
function a0_0x2515ac() {
    return class { };
}
var a0_0x4a6c4a = _0x4fa556 => {
    return _0x4fa556.text("404 Not Found", 0x194);
};
var a0_0x5f4087 = (_0x55a88, _0x5f6c2d) => {
    if (_0x55a88 instanceof a0_0x4fe853) {
        return _0x55a88.getResponse();
    }
    console.error(_0x55a88);
    return _0x5f6c2d.text("Internal Server Error", 0x1f4);
};
var a0_0x292eaa;
var a0_0x428de4 = class extends class { } {
    constructor(_0x4eb867 = {}) {
        super();
        this._basePath = '/';
        a0_0x4c31e5(this, a0_0x292eaa, '/');
        this.routes = [];
        this.notFoundHandler = a0_0x4a6c4a;
        this.errorHandler = a0_0x5f4087;
        this.onError = _0x3f1a5e => {
            this.errorHandler = _0x3f1a5e;
            return this;
        };
        this.notFound = _0x6661c5 => {
            this.notFoundHandler = _0x6661c5;
            return this;
        };
        this.fetch = (_0x1d9a39, _0x18409d, _0x45d28c) => {
            return this.dispatch(_0x1d9a39, _0x45d28c, _0x18409d, _0x1d9a39.method);
        };
        this.request = (_0x3d7099, _0x37369f, _0x42ef8f, _0xf5a33) => {
            if (_0x3d7099 instanceof Request) {
                if (_0x37369f !== undefined) {
                    _0x3d7099 = new Request(_0x3d7099, _0x37369f);
                }
                return this.fetch(_0x3d7099, _0x42ef8f, _0xf5a33);
            }
            _0x3d7099 = _0x3d7099.toString();
            const _0x535ed2 = /^https?:\/\//.test(_0x3d7099) ? _0x3d7099 : "http://localhost" + a0_0x29d579('/', _0x3d7099);
            const _0x38618b = new Request(_0x535ed2, _0x37369f);
            return this.fetch(_0x38618b, _0x42ef8f, _0xf5a33);
        };
        this.fire = () => {
            addEventListener("fetch", _0x400bfb => {
                _0x400bfb.respondWith(this.dispatch(_0x400bfb.request, _0x400bfb, undefined, _0x400bfb.request.method));
            });
        };
        const _0x4ec53a = [...a0_0x4ef4dc, "all"];
        _0x4ec53a.map(_0x476e3d => {
            this[_0x476e3d] = (_0x5c1873, ..._0x58061e) => {
                if (typeof _0x5c1873 === 'string') {
                    a0_0x4cd819(this, a0_0x292eaa, _0x5c1873);
                } else {
                    this.addRoute(_0x476e3d, a0_0x110ed4(this, a0_0x292eaa), _0x5c1873);
                }
                _0x58061e.map(_0x289d89 => {
                    if (typeof _0x289d89 !== "string") {
                        this.addRoute(_0x476e3d, a0_0x110ed4(this, a0_0x292eaa), _0x289d89);
                    }
                });
                return this;
            };
        });
        this.on = (_0x15bb8a, _0x5a0253, ..._0x313668) => {
            if (!_0x15bb8a) {
                return this;
            }
            for (const _0x5e4c2e of [_0x5a0253].flat()) {
                a0_0x4cd819(this, a0_0x292eaa, _0x5e4c2e);
                for (const _0x4828db of [_0x15bb8a].flat()) {
                    _0x313668.map(_0x4a82bd => {
                        this.addRoute(_0x4828db.toUpperCase(), a0_0x110ed4(this, a0_0x292eaa), _0x4a82bd);
                    });
                }
            }
            return this;
        };
        this.use = (_0x31d4c1, ..._0x49da3b) => {
            if (typeof _0x31d4c1 === 'string') {
                a0_0x4cd819(this, a0_0x292eaa, _0x31d4c1);
            } else {
                a0_0x4cd819(this, a0_0x292eaa, '*');
                _0x49da3b.unshift(_0x31d4c1);
            }
            _0x49da3b.map(_0x17dfb0 => {
                this.addRoute("ALL", a0_0x110ed4(this, a0_0x292eaa), _0x17dfb0);
            });
            return this;
        };
        const _0x349328 = _0x4eb867.strict ?? true;
        delete _0x4eb867.strict;
        Object.assign(this, _0x4eb867);
        this.getPath = _0x349328 ? _0x4eb867.getPath ?? a0_0x14d390 : a0_0x1b3552;
    }
    ["clone"]() {
        const _0x2ad5ee = new a0_0x428de4({
            'router': this.router,
            'getPath': this.getPath
        });
        _0x2ad5ee.routes = this.routes;
        return _0x2ad5ee;
    }
    ['route'](_0x55e6c6, _0x4072be) {
        const _0x3d17bd = this.basePath(_0x55e6c6);
        if (!_0x4072be) {
            return _0x3d17bd;
        }
        _0x4072be.routes.map(_0x1d614d => {
            let _0x2396e8;
            if (_0x4072be.errorHandler === a0_0x5f4087) {
                _0x2396e8 = _0x1d614d.handler;
            } else {
                _0x2396e8 = async (_0x2e13b6, _0x2d978b) => (await a0_0x3e0f9d([], _0x4072be.errorHandler)(_0x2e13b6, () => _0x1d614d.handler(_0x2e13b6, _0x2d978b))).res;
                _0x2396e8[a0_0xd2be31] = _0x1d614d.handler;
            }
            _0x3d17bd.addRoute(_0x1d614d.method, _0x1d614d.path, _0x2396e8);
        });
        return this;
    }
    ["basePath"](_0x5694ed) {
        const _0x747434 = this.clone();
        _0x747434._basePath = a0_0x29d579(this._basePath, _0x5694ed);
        return _0x747434;
    }
    ['mount'](_0x25cdb0, _0x467329, _0x37230a) {
        const _0x1367d3 = a0_0x29d579(this._basePath, _0x25cdb0);
        const _0x165a1d = _0x1367d3 === '/' ? 0x0 : _0x1367d3.length;
        const _0xbf21 = async (_0x474f79, _0x133958) => {
            let _0x2c6789 = undefined;
            try {
                _0x2c6789 = _0x474f79.executionCtx;
            } catch { }
            const _0x54c226 = _0x37230a ? _0x37230a(_0x474f79) : [_0x474f79.env, _0x2c6789];
            const _0x136fb8 = Array.isArray(_0x54c226) ? _0x54c226 : [_0x54c226];
            const _0x219e42 = a0_0xb712b0(_0x474f79.req.url);
            const _0x306207 = await _0x467329(new Request(new URL((_0x474f79.req.path.slice(_0x165a1d) || '/') + _0x219e42, _0x474f79.req.url), _0x474f79.req.raw), ..._0x136fb8);
            if (_0x306207) {
                return _0x306207;
            }
            await _0x133958();
        };
        this.addRoute("ALL", a0_0x29d579(_0x25cdb0, '*'), _0xbf21);
        return this;
    }
    ["addRoute"](_0x50399a, _0xb2400e, _0x2c956d) {
        _0x50399a = _0x50399a.toUpperCase();
        _0xb2400e = a0_0x29d579(this._basePath, _0xb2400e);
        const _0x3f158b = {
            'path': _0xb2400e,
            'method': _0x50399a,
            'handler': _0x2c956d
        };
        this.router.add(_0x50399a, _0xb2400e, [_0x2c956d, _0x3f158b]);
        this.routes.push(_0x3f158b);
    }
    ["matchRoute"](_0x389b55, _0x1fadf4) {
        return this.router.match(_0x389b55, _0x1fadf4);
    }
    ["handleError"](_0xf53b89, _0x2a0e59) {
        if (_0xf53b89 instanceof Error) {
            return this.errorHandler(_0xf53b89, _0x2a0e59);
        }
        throw _0xf53b89;
    }
    ["dispatch"](_0x35fb56, _0x229666, _0x14fa57, _0x5694bf) {
        if (_0x5694bf === "HEAD") {
            return (async () => new Response(null, await this.dispatch(_0x35fb56, _0x229666, _0x14fa57, "GET")))();
        }
        const _0x1aa67a = this.getPath(_0x35fb56, {
            'env': _0x14fa57
        });
        const _0x17ecd8 = this.matchRoute(_0x5694bf, _0x1aa67a);
        const _0x3cd6a6 = new a0_0x46ed0e(new a0_0x55ff6c(_0x35fb56, _0x1aa67a, _0x17ecd8), {
            'env': _0x14fa57,
            'executionCtx': _0x229666,
            'notFoundHandler': this.notFoundHandler
        });
        if (_0x17ecd8[0x0].length === 0x1) {
            let _0x227882;
            try {
                _0x227882 = _0x17ecd8[0x0][0x0][0x0][0x0](_0x3cd6a6, async () => {
                    _0x3cd6a6.res = await this.notFoundHandler(_0x3cd6a6);
                });
            } catch (_0x54f596) {
                return this.handleError(_0x54f596, _0x3cd6a6);
            }
            return _0x227882 instanceof Promise ? _0x227882.then(_0x40d356 => _0x40d356 || (_0x3cd6a6.finalized ? _0x3cd6a6.res : this.notFoundHandler(_0x3cd6a6)))['catch'](_0xde5d0f => this.handleError(_0xde5d0f, _0x3cd6a6)) : _0x227882;
        }
        const _0x3ccfe4 = a0_0x3e0f9d(_0x17ecd8[0x0], this.errorHandler, this.notFoundHandler);
        return (async () => {
            try {
                const _0x398a99 = await _0x3ccfe4(_0x3cd6a6);
                if (!_0x398a99.finalized) {
                    throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");
                }
                return _0x398a99.res;
            } catch (_0x54cde0) {
                return this.handleError(_0x54cde0, _0x3cd6a6);
            }
        })();
    }
};
a0_0x292eaa = new WeakMap();
var a0_0x168a8d = Symbol();
function a0_0x40c464(_0x45ac6e, _0x160b54) {
    if (_0x45ac6e.length === 0x1) {
        return _0x160b54.length === 0x1 ? _0x45ac6e < _0x160b54 ? -0x1 : 0x1 : -0x1;
    }
    if (_0x160b54.length === 0x1) {
        return 0x1;
    }
    if (_0x45ac6e === '.*' || _0x45ac6e === "(?:|/.*)") {
        return 0x1;
    } else {
        if (_0x160b54 === '.*' || _0x160b54 === "(?:|/.*)") {
            return -0x1;
        }
    }
    if (_0x45ac6e === "[^/]+") {
        return 0x1;
    } else {
        if (_0x160b54 === "[^/]+") {
            return -0x1;
        }
    }
    return _0x45ac6e.length === _0x160b54.length ? _0x45ac6e < _0x160b54 ? -0x1 : 0x1 : _0x160b54.length - _0x45ac6e.length;
}
var a0_0x37d6b7 = class {
    constructor() {
        this.children = {};
    }
    ['insert'](_0x416827, _0x4c9ce9, _0x23bc44, _0x9d2b12, _0x286f96) {
        if (_0x416827.length === 0x0) {
            if (this.index !== undefined) {
                throw a0_0x168a8d;
            }
            if (_0x286f96) {
                return;
            }
            this.index = _0x4c9ce9;
            return;
        }
        const [_0x11febc, ..._0xf9d77b] = _0x416827;
        const _0x173e7d = _0x11febc === '*' ? _0xf9d77b.length === 0x0 ? ['', '', '.*'] : ['', '', "[^/]+"] : _0x11febc === '/*' ? ['', '', "(?:|/.*)"] : _0x11febc.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
        let _0x6e3990;
        if (_0x173e7d) {
            const _0x29e39b = _0x173e7d[0x1];
            let _0x3fcb03 = _0x173e7d[0x2] || "[^/]+";
            if (_0x29e39b && _0x173e7d[0x2]) {
                _0x3fcb03 = _0x3fcb03.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
                if (/\((?!\?:)/.test(_0x3fcb03)) {
                    throw a0_0x168a8d;
                }
            }
            _0x6e3990 = this.children[_0x3fcb03];
            if (!_0x6e3990) {
                if (Object.keys(this.children).some(_0x33afe8 => _0x33afe8 !== '.*' && _0x33afe8 !== "(?:|/.*)")) {
                    throw a0_0x168a8d;
                }
                if (_0x286f96) {
                    return;
                }
                _0x6e3990 = this.children[_0x3fcb03] = new a0_0x37d6b7();
                if (_0x29e39b !== '') {
                    _0x6e3990.varIndex = _0x9d2b12.varIndex++;
                }
            }
            if (!_0x286f96 && _0x29e39b !== '') {
                _0x23bc44.push([_0x29e39b, _0x6e3990.varIndex]);
            }
        } else {
            _0x6e3990 = this.children[_0x11febc];
            if (!_0x6e3990) {
                if (Object.keys(this.children).some(_0x5d0d2f => _0x5d0d2f.length > 0x1 && _0x5d0d2f !== '.*' && _0x5d0d2f !== "(?:|/.*)")) {
                    throw a0_0x168a8d;
                }
                if (_0x286f96) {
                    return;
                }
                _0x6e3990 = this.children[_0x11febc] = new a0_0x37d6b7();
            }
        }
        _0x6e3990.insert(_0xf9d77b, _0x4c9ce9, _0x23bc44, _0x9d2b12, _0x286f96);
    }
    ["buildRegExpStr"]() {
        const _0xe70d3e = Object.keys(this.children).sort(a0_0x40c464);
        const _0x5f5a12 = _0xe70d3e.map(_0x492a93 => {
            const _0x4708c8 = this.children[_0x492a93];
            return (typeof _0x4708c8.varIndex === 'number' ? '(' + _0x492a93 + ')@' + _0x4708c8.varIndex : _0x492a93) + _0x4708c8.buildRegExpStr();
        });
        if (typeof this.index === "number") {
            _0x5f5a12.unshift('#' + this.index);
        }
        if (_0x5f5a12.length === 0x0) {
            return '';
        }
        if (_0x5f5a12.length === 0x1) {
            return _0x5f5a12[0x0];
        }
        return "(?:" + _0x5f5a12.join('|') + ')';
    }
};
var a0_0x51d8d3 = class {
    constructor() {
        this.context = {
            'varIndex': 0x0
        };
        this.root = new a0_0x37d6b7();
    }
    ["insert"](_0xe8278, _0x5bcdab, _0x29a2aa) {
        const _0x1564b0 = [];
        const _0x4d4d50 = [];
        for (let _0x139443 = 0x0; ;) {
            let _0xa09a59 = false;
            _0xe8278 = _0xe8278.replace(/\{[^}]+\}/g, _0x2dfde1 => {
                const _0x4d98bd = "@\\" + _0x139443;
                _0x4d4d50[_0x139443] = [_0x4d98bd, _0x2dfde1];
                _0x139443++;
                _0xa09a59 = true;
                return _0x4d98bd;
            });
            if (!_0xa09a59) {
                break;
            }
        }
        const _0x2af8b7 = _0xe8278.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
        for (let _0xbab76c = _0x4d4d50.length - 0x1; _0xbab76c >= 0x0; _0xbab76c--) {
            const [_0x3b7edf] = _0x4d4d50[_0xbab76c];
            for (let _0x149fc3 = _0x2af8b7.length - 0x1; _0x149fc3 >= 0x0; _0x149fc3--) {
                if (_0x2af8b7[_0x149fc3].indexOf(_0x3b7edf) !== -0x1) {
                    _0x2af8b7[_0x149fc3] = _0x2af8b7[_0x149fc3].replace(_0x3b7edf, _0x4d4d50[_0xbab76c][0x1]);
                    break;
                }
            }
        }
        this.root.insert(_0x2af8b7, _0x5bcdab, _0x1564b0, this.context, _0x29a2aa);
        return _0x1564b0;
    }
    ["buildRegExp"]() {
        let _0x57a40b = this.root.buildRegExpStr();
        if (_0x57a40b === '') {
            return [/^$/, [], []];
        }
        let _0x3a9d84 = 0x0;
        const _0x20511f = [];
        const _0x1f07e2 = [];
        _0x57a40b = _0x57a40b.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_0x44750b, _0x7e417f, _0x235e5c) => {
            if (typeof _0x7e417f !== "undefined") {
                _0x20511f[++_0x3a9d84] = Number(_0x7e417f);
                return "$()";
            }
            if (typeof _0x235e5c !== "undefined") {
                _0x1f07e2[Number(_0x235e5c)] = ++_0x3a9d84;
                return '';
            }
            return '';
        });
        return [new RegExp('^' + _0x57a40b), _0x20511f, _0x1f07e2];
    }
};
var a0_0x5205ae = ["ALL", ...a0_0x4ef4dc].map(_0x13a0bb => _0x13a0bb.toUpperCase());
var a0_0x4e9ab5 = [];
var a0_0x53b156 = [/^$/, [], {}];
var a0_0x5a2c6f = {};
function a0_0x2ec123(_0x3a125c) {
    return a0_0x5a2c6f[_0x3a125c] ?? (a0_0x5a2c6f[_0x3a125c] = new RegExp(_0x3a125c === '*' ? '' : '^' + _0x3a125c.replace(/\/\*/, '(?:|/.*)') + '$'));
}
function a0_0x30ac1a() {
    a0_0x5a2c6f = {};
}
function a0_0x4bbb39(_0x615d28) {
    const _0x55ab02 = new a0_0x51d8d3();
    const _0x119339 = [];
    if (_0x615d28.length === 0x0) {
        return a0_0x53b156;
    }
    const _0x143245 = _0x615d28.map(_0x481e74 => [!/\*|\/:/.test(_0x481e74[0x0]), ..._0x481e74]).sort(([_0x13c1e3, _0x4c4d38], [_0x2c2e8b, _0x3dfc8b]) => _0x13c1e3 ? 0x1 : _0x2c2e8b ? -0x1 : _0x4c4d38.length - _0x3dfc8b.length);
    const _0x5b29aa = {};
    let _0x2f90e6 = 0x0;
    let _0xf4686 = -0x1;
    for (let _0x58f56a = _0x143245.length; _0x2f90e6 < _0x58f56a; _0x2f90e6++) {
        const [_0x56d9ee, _0x5326dc, _0x9d05cb] = _0x143245[_0x2f90e6];
        if (_0x56d9ee) {
            _0x5b29aa[_0x5326dc] = [_0x9d05cb.map(([_0x1c57d4]) => [_0x1c57d4, {}]), a0_0x4e9ab5];
        } else {
            _0xf4686++;
        }
        let _0x20d83c;
        try {
            _0x20d83c = _0x55ab02.insert(_0x5326dc, _0xf4686, _0x56d9ee);
        } catch (_0xb4a6c2) {
            throw _0xb4a6c2 === a0_0x168a8d ? new a0_0x200727(_0x5326dc) : _0xb4a6c2;
        }
        if (_0x56d9ee) {
            continue;
        }
        _0x119339[_0xf4686] = _0x9d05cb.map(([_0x14d8c8, _0x195134]) => {
            const _0x10af57 = {};
            _0x195134 -= 0x1;
            for (; _0x195134 >= 0x0; _0x195134--) {
                const [_0x10c327, _0x5de1eb] = _0x20d83c[_0x195134];
                _0x10af57[_0x10c327] = _0x5de1eb;
            }
            return [_0x14d8c8, _0x10af57];
        });
    }
    const [_0x23a497, _0x482538, _0x4d0883] = _0x55ab02.buildRegExp();
    let _0x696bb6 = 0x0;
    for (let _0x42b076 = _0x119339.length; _0x696bb6 < _0x42b076; _0x696bb6++) {
        let _0x3b285a = 0x0;
        for (let _0x379a99 = _0x119339[_0x696bb6].length; _0x3b285a < _0x379a99; _0x3b285a++) {
            const _0x288fcf = _0x119339[_0x696bb6][_0x3b285a]?.[0x1];
            if (!_0x288fcf) {
                continue;
            }
            const _0x42408f = Object.keys(_0x288fcf);
            let _0x12d94e = 0x0;
            for (let _0x4fa9fa = _0x42408f.length; _0x12d94e < _0x4fa9fa; _0x12d94e++) {
                _0x288fcf[_0x42408f[_0x12d94e]] = _0x4d0883[_0x288fcf[_0x42408f[_0x12d94e]]];
            }
        }
    }
    const _0x376dfa = [];
    for (const _0x46c704 in _0x482538) {
        _0x376dfa[_0x46c704] = _0x119339[_0x482538[_0x46c704]];
    }
    return [_0x23a497, _0x376dfa, _0x5b29aa];
}
function a0_0x209978(_0xf5b538, _0x623943) {
    if (!_0xf5b538) {
        return undefined;
    }
    for (const _0x3c9e19 of Object.keys(_0xf5b538).sort((_0x59f884, _0x4da015) => _0x4da015.length - _0x59f884.length)) {
        if (a0_0x2ec123(_0x3c9e19).test(_0x623943)) {
            return [..._0xf5b538[_0x3c9e19]];
        }
    }
    return undefined;
}
var a0_0x2ecad6 = class {
    constructor() {
        this.name = 'RegExpRouter';
        this.middleware = {
            ALL: {}
        };
        this.routes = {
            ALL: {}
        };
    }
    ["add"](_0x369466, _0x427a8f, _0x1419a5) {
        var _0x31665a;
        const {
            middleware: _0xc0abc8,
            routes: _0x53a394
        } = this;
        if (!_0xc0abc8 || !_0x53a394) {
            throw new Error("Can not add a route since the matcher is already built.");
        }
        if (a0_0x5205ae.indexOf(_0x369466) === -0x1) {
            a0_0x5205ae.push(_0x369466);
        }
        if (!_0xc0abc8[_0x369466]) {
            ;
            [_0xc0abc8, _0x53a394].forEach(_0x503afa => {
                _0x503afa[_0x369466] = {};
                Object.keys(_0x503afa.ALL).forEach(_0x44f27c => {
                    _0x503afa[_0x369466][_0x44f27c] = [..._0x503afa.ALL[_0x44f27c]];
                });
            });
        }
        if (_0x427a8f === '/*') {
            _0x427a8f = '*';
        }
        const _0x339dc6 = (_0x427a8f.match(/\/:/g) || []).length;
        if (/\*$/.test(_0x427a8f)) {
            const _0x125670 = a0_0x2ec123(_0x427a8f);
            if (_0x369466 === "ALL") {
                Object.keys(_0xc0abc8).forEach(_0x57d3a7 => {
                    var _0x3623f5;
                    if (!(_0x3623f5 = _0xc0abc8[_0x57d3a7])[_0x427a8f]) {
                        _0x3623f5[_0x427a8f] = a0_0x209978(_0xc0abc8[_0x57d3a7], _0x427a8f) || a0_0x209978(_0xc0abc8.ALL, _0x427a8f) || [];
                    }
                });
            } else if (!(_0x31665a = _0xc0abc8[_0x369466])[_0x427a8f]) {
                _0x31665a[_0x427a8f] = a0_0x209978(_0xc0abc8[_0x369466], _0x427a8f) || a0_0x209978(_0xc0abc8.ALL, _0x427a8f) || [];
            }
            Object.keys(_0xc0abc8).forEach(_0x296832 => {
                if (_0x369466 === "ALL" || _0x369466 === _0x296832) {
                    Object.keys(_0xc0abc8[_0x296832]).forEach(_0x4ce386 => {
                        if (_0x125670.test(_0x4ce386)) {
                            _0xc0abc8[_0x296832][_0x4ce386].push([_0x1419a5, _0x339dc6]);
                        }
                    });
                }
            });
            Object.keys(_0x53a394).forEach(_0x1975e4 => {
                if (_0x369466 === "ALL" || _0x369466 === _0x1975e4) {
                    Object.keys(_0x53a394[_0x1975e4]).forEach(_0x433e55 => _0x125670.test(_0x433e55) && _0x53a394[_0x1975e4][_0x433e55].push([_0x1419a5, _0x339dc6]));
                }
            });
            return;
        }
        const _0x4e0c79 = a0_0x42e93f(_0x427a8f) || [_0x427a8f];
        let _0xcc961 = 0x0;
        for (let _0x15fe0a = _0x4e0c79.length; _0xcc961 < _0x15fe0a; _0xcc961++) {
            const _0x1ded16 = _0x4e0c79[_0xcc961];
            Object.keys(_0x53a394).forEach(_0x2b76a6 => {
                var _0x1c09d6;
                if (_0x369466 === "ALL" || _0x369466 === _0x2b76a6) {
                    if (!(_0x1c09d6 = _0x53a394[_0x2b76a6])[_0x1ded16]) {
                        _0x1c09d6[_0x1ded16] = [...(a0_0x209978(_0xc0abc8[_0x2b76a6], _0x1ded16) || a0_0x209978(_0xc0abc8.ALL, _0x1ded16) || [])];
                    }
                    _0x53a394[_0x2b76a6][_0x1ded16].push([_0x1419a5, _0x339dc6 - _0x15fe0a + _0xcc961 + 0x1]);
                }
            });
        }
    }
    ["match"](_0x3ddb7c, _0x11a7a4) {
        a0_0x30ac1a();
        const _0x4c6e66 = this.buildAllMatchers();
        this.match = (_0x36f342, _0x277747) => {
            const _0x4f6cca = _0x4c6e66[_0x36f342];
            const _0x1a3bc9 = _0x4f6cca[0x2][_0x277747];
            if (_0x1a3bc9) {
                return _0x1a3bc9;
            }
            const _0x2712b8 = _0x277747.match(_0x4f6cca[0x0]);
            if (!_0x2712b8) {
                return [[], a0_0x4e9ab5];
            }
            const _0x22f793 = _0x2712b8.indexOf('', 0x1);
            return [_0x4f6cca[0x1][_0x22f793], _0x2712b8];
        };
        return this.match(_0x3ddb7c, _0x11a7a4);
    }
    ['buildAllMatchers']() {
        const _0x327a95 = {};
        a0_0x5205ae.forEach(_0x26c49a => {
            _0x327a95[_0x26c49a] = this.buildMatcher(_0x26c49a) || _0x327a95.ALL;
        });
        this.middleware = this.routes = undefined;
        return _0x327a95;
    }
    ['buildMatcher'](_0x531d8d) {
        const _0x14d9c7 = [];
        let _0x15415c = _0x531d8d === "ALL";
        [this.middleware, this.routes].forEach(_0x273c5d => {
            const _0x119040 = _0x273c5d[_0x531d8d] ? Object.keys(_0x273c5d[_0x531d8d]).map(_0xf73895 => [_0xf73895, _0x273c5d[_0x531d8d][_0xf73895]]) : [];
            if (_0x119040.length !== 0x0) {
                if (!_0x15415c) {
                    _0x15415c = true;
                }
                _0x14d9c7.push(..._0x119040);
            } else if (_0x531d8d !== "ALL") {
                _0x14d9c7.push(...Object.keys(_0x273c5d.ALL).map(_0x311269 => [_0x311269, _0x273c5d.ALL[_0x311269]]));
            }
        });
        if (!_0x15415c) {
            return null;
        } else {
            return a0_0x4bbb39(_0x14d9c7);
        }
    }
};
var a0_0x1ac307 = class {
    constructor(_0x454d3c) {
        this.name = 'SmartRouter';
        this.routers = [];
        this.routes = [];
        Object.assign(this, _0x454d3c);
    }
    ["add"](_0x4bfb89, _0x21b93d, _0x4afdf9) {
        if (!this.routes) {
            throw new Error("Can not add a route since the matcher is already built.");
        }
        this.routes.push([_0x4bfb89, _0x21b93d, _0x4afdf9]);
    }
    ['match'](_0x348aa9, _0x450112) {
        if (!this.routes) {
            throw new Error("Fatal error");
        }
        const {
            routers: _0x531949,
            routes: _0x413a6e
        } = this;
        const _0x23bc8c = _0x531949.length;
        let _0x2bd204 = 0x0;
        let _0x5fe732;
        for (; _0x2bd204 < _0x23bc8c; _0x2bd204++) {
            const _0x994671 = _0x531949[_0x2bd204];
            try {
                _0x413a6e.forEach(_0x3b5ae3 => {
                    _0x994671.add(..._0x3b5ae3);
                });
                _0x5fe732 = _0x994671.match(_0x348aa9, _0x450112);
            } catch (_0x387648) {
                if (_0x387648 instanceof a0_0x200727) {
                    continue;
                }
                throw _0x387648;
            }
            this.match = _0x994671.match.bind(_0x994671);
            this.routers = [_0x994671];
            this.routes = undefined;
            break;
        }
        if (_0x2bd204 === _0x23bc8c) {
            throw new Error("Fatal error");
        }
        this.name = "SmartRouter + " + this.activeRouter.name;
        return _0x5fe732;
    }
    get ["activeRouter"]() {
        if (this.routes || this.routers.length !== 0x1) {
            throw new Error("No active router has been determined yet.");
        }
        return this.routers[0x0];
    }
};
var a0_0x55eb33 = class {
    constructor(_0x4e5c50, _0x1b1050, _0x5318a7) {
        this.order = 0x0;
        this.params = {};
        this.children = _0x5318a7 || {};
        this.methods = [];
        this.name = '';
        if (_0x4e5c50 && _0x1b1050) {
            const _0x1c0ebf = {
                _0x4e5c50: {
                    'handler': _0x1b1050,
                    'possibleKeys': [],
                    'score': 0x0,
                    'name': this.name
                }
            };
            this.methods = [_0x1c0ebf];
        }
        this.patterns = [];
    }
    ['insert'](_0x314d56, _0x3a2460, _0x1818a6) {
        this.name = _0x314d56 + " " + _0x3a2460;
        this.order = ++this.order;
        let _0x4efc86 = this;
        const _0x114cb3 = a0_0x4012f9(_0x3a2460);
        const _0x143b12 = [];
        const _0x527e64 = [];
        let _0xd82006 = 0x0;
        for (let _0x25e365 = _0x114cb3.length; _0xd82006 < _0x25e365; _0xd82006++) {
            const _0x4c322e = _0x114cb3[_0xd82006];
            if (Object.keys(_0x4efc86.children).includes(_0x4c322e)) {
                _0x527e64.push(..._0x4efc86.patterns);
                _0x4efc86 = _0x4efc86.children[_0x4c322e];
                const _0xad40e7 = a0_0x31ecc6(_0x4c322e);
                if (_0xad40e7) {
                    _0x143b12.push(_0xad40e7[0x1]);
                }
                continue;
            }
            _0x4efc86.children[_0x4c322e] = new a0_0x55eb33();
            const _0x59a739 = a0_0x31ecc6(_0x4c322e);
            if (_0x59a739) {
                _0x4efc86.patterns.push(_0x59a739);
                _0x527e64.push(..._0x4efc86.patterns);
                _0x143b12.push(_0x59a739[0x1]);
            }
            _0x527e64.push(..._0x4efc86.patterns);
            _0x4efc86 = _0x4efc86.children[_0x4c322e];
        }
        if (!_0x4efc86.methods.length) {
            _0x4efc86.methods = [];
        }
        const _0x690ce = {};
        const _0x5cd19b = {
            'handler': _0x1818a6,
            'possibleKeys': _0x143b12.filter((_0x27b951, _0x30ae8d, _0x594b9b) => _0x594b9b.indexOf(_0x27b951) === _0x30ae8d),
            'name': this.name,
            'score': this.order
        };
        _0x690ce[_0x314d56] = _0x5cd19b;
        _0x4efc86.methods.push(_0x690ce);
        return _0x4efc86;
    }
    ['gHSets'](_0x177e43, _0x178689, _0x303a2, _0x4bd842) {
        const _0x5e4b94 = [];
        let _0x5cb5d2 = 0x0;
        for (let _0x3f4dee = _0x177e43.methods.length; _0x5cb5d2 < _0x3f4dee; _0x5cb5d2++) {
            const _0x41fbaf = _0x177e43.methods[_0x5cb5d2];
            const _0x413c2a = _0x41fbaf[_0x178689] || _0x41fbaf.ALL;
            const _0x33d4e2 = {};
            if (_0x413c2a !== undefined) {
                _0x413c2a.params = {};
                _0x413c2a.possibleKeys.forEach(_0x30d5da => {
                    const _0x3e2373 = _0x33d4e2[_0x413c2a.name];
                    _0x413c2a.params[_0x30d5da] = _0x4bd842[_0x30d5da] && !_0x3e2373 ? _0x4bd842[_0x30d5da] : _0x303a2[_0x30d5da] ?? _0x4bd842[_0x30d5da];
                    _0x33d4e2[_0x413c2a.name] = true;
                });
                _0x5e4b94.push(_0x413c2a);
            }
        }
        return _0x5e4b94;
    }
    ["search"](_0x2a7168, _0x4b4737) {
        const _0x8513b4 = [];
        this.params = {};
        const _0x21f50b = this;
        let _0xe66c94 = [_0x21f50b];
        const _0x9c0e2a = a0_0x2126cc(_0x4b4737);
        let _0x3cc21e = 0x0;
        for (let _0x4bf45c = _0x9c0e2a.length; _0x3cc21e < _0x4bf45c; _0x3cc21e++) {
            const _0x288578 = _0x9c0e2a[_0x3cc21e];
            const _0x4e3625 = _0x3cc21e === _0x4bf45c - 0x1;
            const _0x279e95 = [];
            let _0x1190a9 = 0x0;
            for (let _0x20bd35 = _0xe66c94.length; _0x1190a9 < _0x20bd35; _0x1190a9++) {
                const _0xefabf6 = _0xe66c94[_0x1190a9];
                const _0xfe7470 = _0xefabf6.children[_0x288578];
                if (_0xfe7470) {
                    _0xfe7470.params = _0xefabf6.params;
                    if (_0x4e3625 === true) {
                        if (_0xfe7470.children['*']) {
                            _0x8513b4.push(...this.gHSets(_0xfe7470.children['*'], _0x2a7168, _0xefabf6.params, {}));
                        }
                        _0x8513b4.push(...this.gHSets(_0xfe7470, _0x2a7168, _0xefabf6.params, {}));
                    } else {
                        _0x279e95.push(_0xfe7470);
                    }
                }
                let _0x3cc73d = 0x0;
                for (let _0x2d66ff = _0xefabf6.patterns.length; _0x3cc73d < _0x2d66ff; _0x3cc73d++) {
                    const _0x4f5551 = _0xefabf6.patterns[_0x3cc73d];
                    const _0x6192f7 = {
                        ..._0xefabf6.params
                    };
                    if (_0x4f5551 === '*') {
                        const _0x3c4d0c = _0xefabf6.children['*'];
                        if (_0x3c4d0c) {
                            _0x8513b4.push(...this.gHSets(_0x3c4d0c, _0x2a7168, _0xefabf6.params, {}));
                            _0x279e95.push(_0x3c4d0c);
                        }
                        continue;
                    }
                    if (_0x288578 === '') {
                        continue;
                    }
                    const [_0xdcf868, _0x4f6fc5, _0x4f1d37] = _0x4f5551;
                    const _0x2222c0 = _0xefabf6.children[_0xdcf868];
                    const _0x5da51f = _0x9c0e2a.slice(_0x3cc21e).join('/');
                    if (_0x4f1d37 instanceof RegExp && _0x4f1d37.test(_0x5da51f)) {
                        _0x6192f7[_0x4f6fc5] = _0x5da51f;
                        _0x8513b4.push(...this.gHSets(_0x2222c0, _0x2a7168, _0xefabf6.params, _0x6192f7));
                        continue;
                    }
                    if (_0x4f1d37 === true || _0x4f1d37 instanceof RegExp && _0x4f1d37.test(_0x288578)) {
                        if (typeof _0xdcf868 === 'string') {
                            _0x6192f7[_0x4f6fc5] = _0x288578;
                            if (_0x4e3625 === true) {
                                _0x8513b4.push(...this.gHSets(_0x2222c0, _0x2a7168, _0x6192f7, _0xefabf6.params));
                                if (_0x2222c0.children['*']) {
                                    _0x8513b4.push(...this.gHSets(_0x2222c0.children['*'], _0x2a7168, _0x6192f7, _0xefabf6.params));
                                }
                            } else {
                                _0x2222c0.params = _0x6192f7;
                                _0x279e95.push(_0x2222c0);
                            }
                        }
                    }
                }
            }
            _0xe66c94 = _0x279e95;
        }
        const _0x12b44e = _0x8513b4.sort((_0x51cde7, _0x4a4079) => {
            return _0x51cde7.score - _0x4a4079.score;
        });
        return [_0x12b44e.map(({
            handler: _0x30ca79,
            params: _0x5eb80c
        }) => [_0x30ca79, _0x5eb80c])];
    }
};
var a0_0x5c875e = class {
    constructor() {
        this.name = "TrieRouter";
        this.node = new a0_0x55eb33();
    }
    ["add"](_0x343aff, _0x1ea3b0, _0x411446) {
        const _0x1a8a76 = a0_0x42e93f(_0x1ea3b0);
        if (_0x1a8a76) {
            for (const _0x591d92 of _0x1a8a76) {
                this.node.insert(_0x343aff, _0x591d92, _0x411446);
            }
            return;
        }
        this.node.insert(_0x343aff, _0x1ea3b0, _0x411446);
    }
    ["match"](_0x2cfa21, _0x1b2053) {
        return this.node.search(_0x2cfa21, _0x1b2053);
    }
};
var a0_0x396241 = class extends a0_0x428de4 {
    constructor(_0x504d96 = {}) {
        super(_0x504d96);
        this.router = _0x504d96.router ?? new a0_0x1ac307({
            'routers': [new a0_0x2ecad6(), new a0_0x5c875e()]
        });
    }
};
var getProxyConfig;
function a0_0xe11b82() {
    return typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node;
}
function a0_0xd23076(_0x1494db) {
    if (_0x1494db.token_prefix === '/' || _0x1494db.token_prefix === '//' || _0x1494db.token_prefix === '') {
        _0x1494db.token_prefix = "/default/";
        _0x1494db.default_password = true;
    }
    return _0x1494db;
}
function a0_0x5b9414(_0x558724) {
    if (!(typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node)) {
        console.log("cloudflare environment!");
        getProxyConfig = {
            'proxy_url': `https://${域名}`,
            'token_prefix': `/${路径}/`,
            'local_listen_port': 0x138e
        };
        console.log("Configuration loaded:", getProxyConfig);
        getProxyConfig = a0_0xd23076(getProxyConfig);
        _0x558724(getProxyConfig);
    } else {
        console.log("node environment!");
        import("fs/promises").then(_0xdc1cdc => {
            _0xdc1cdc.readFile('./config.json', "utf8").then(_0x579f7f => {
                getProxyConfig = JSON.parse(_0x579f7f);
                console.log("Configuration loaded:", getProxyConfig);
                getProxyConfig = a0_0xd23076(getProxyConfig);
                _0x558724(getProxyConfig);
            })["catch"](_0x1cb58c => {
                console.error("Error loading the configuration file:", _0x1cb58c);
            });
        });
    }
}
function a0_0x4468cb() {
    return getProxyConfig;
}
var a0_0x1dd693 = ["telegram.org", "nga.178.com"];
function a0_0x2fdbcb(_0x38fecf) {
    let _0x7aca52 = false;
    a0_0x1dd693.forEach(_0x243e6f => {
        if (_0x38fecf.includes(_0x243e6f)) {
            _0x7aca52 = true;
        }
    });
    return _0x7aca52;
}
var a0_0x564c3a = ["telegram.org/service_worker.js", "elcomercio.pe", "exchangebank.com"];
function a0_0x40ef07(_0x30d246) {
    let _0x5601cc = false;
    a0_0x564c3a.map(_0x3f7f14 => {
        if (_0x30d246.includes(_0x3f7f14)) {
            _0x5601cc = true;
        }
    });
    return _0x5601cc;
}
var a0_0xaaf932 = [{
    'domain': "google.com",
    'replacements': [{
        'regex': /;\w+?\.integrity='sha.+?';/,
        'replacement': ';'
    }]
}];
var a0_0x1995b4 = [{
    'regex': /\.URL\b/,
    'replacement': '.___URL'
}, {
    'regex': /\bdomain\b/,
    'replacement': "___domain"
}, {
    'regex': /\blocation\b/,
    'replacement': "___location"
}, {
    'regex': /\bpushState\b/,
    'replacement': "___pushState"
}, {
    'regex': /\breplaceState\b/,
    'replacement': "___replaceState"
}];
function a0_0xa5b61({
    body: _0x8ee95e,
    proxy_real_host: _0x31d7cb,
    proxy_url_prefix: _0x1e5679
}) {
    let _0x2b476e = _0x8ee95e;
    if (_0x8ee95e.indexOf('document.URL') !== -0x1) { }
    if (!a0_0x2fdbcb(_0x31d7cb)) {
        a0_0x1995b4.forEach(({
            regex: _0xb51814,
            replacement: _0x35a879
        }) => {
            _0x2b476e = _0x2b476e.replace(new RegExp(_0xb51814, 'g'), _0x35a879);
        });
    }
    return _0x2b476e;
}
var a0_0x376c3c;
var a0_0x3d5b41 = ({
    location_value: _0x29c04e,
    proxy_url_prefix: _0x5ee752,
    proxy_real_protocol: _0x46fe39,
    proxy_real_host: _0x237e27
}) => {
    const _0x3b894e = {
        '^(http[s]?)://([-a-z0-9A-Z.]+)': _0x5ee752 + "$1/$2"
    };
    for (let _0x23e782 in _0x3b894e) {
        let _0x199f8e = new RegExp(_0x23e782, 'g');
        _0x29c04e = _0x29c04e.replace(_0x199f8e, _0x3b894e[_0x23e782]);
    }
    return _0x29c04e;
};
function a0_0x537262({
    location_value: _0x56b5c3,
    proxy_url_prefix: _0x39f82e,
    proxy_real_protocol: _0x3ee6a3,
    proxy_real_host: _0x24823b
}) {
    let _0x364fe1 = a0_0x3d5b41({
        'location_value': _0x56b5c3,
        'proxy_url_prefix': _0x39f82e,
        'proxy_real_protocol': _0x3ee6a3,
        'proxy_real_host': _0x24823b
    });
    if (_0x364fe1.startsWith('/')) {
        _0x364fe1 = _0x39f82e + _0x3ee6a3 + '/' + _0x24823b + _0x364fe1;
    }
    return _0x364fe1;
}
function a0_0x39ba62() {
    return typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node;
}
async function a0_0x2fb429(_0x3b2aab, _0x2a7404) {
    if (typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node) {
        return await a0_0x12b893(_0x3b2aab, _0x2a7404);
    } else {
        return await a0_0x2f8ab9(_0x3b2aab, _0x2a7404);
    }
}
async function a0_0x12b893(_0x2cfe4e, _0x21d99b) {
    if (!a0_0x376c3c) {
        a0_0x376c3c = await import("zlib");
    }
    try {
        if (_0x21d99b === 'br') {
            return a0_0x376c3c.brotliCompressSync(_0x2cfe4e);
        } else {
            return _0x21d99b === 'gzip' ? a0_0x376c3c.gzipSync(_0x2cfe4e) : _0x2cfe4e;
        }
    } catch (_0x2e573a) {
        console.error("Compression error:", _0x2e573a);
        return _0x2cfe4e;
    }
}
async function a0_0x2f8ab9(_0x3c42f6, _0x3efd7c) {
    if (typeof CompressionStream !== 'undefined') {
        try {
            let _0x4aea7e;
            if (_0x3efd7c === 'gzip' || _0x3efd7c === 'br') {
                _0x4aea7e = _0x3c42f6.pipeThrough(new CompressionStream(_0x3efd7c));
            } else {
                throw new Error("Unsupported encoding for compression");
            }
            const _0x5d02c8 = _0x4aea7e.getReader();
            let _0x26430e = [];
            let _0x29ce48;
            while (!(_0x29ce48 = await _0x5d02c8.read()).done) {
                _0x26430e.push(_0x29ce48.value);
            }
            const _0x1a6734 = new Uint8Array(_0x26430e.reduce((_0x4212b5, _0x178723) => _0x4212b5.concat(Array.from(_0x178723)), []));
            return _0x1a6734;
        } catch (_0x2d1d89) {
            console.error("Compression error:", _0x2d1d89);
            return _0x3c42f6;
        }
    } else {
        console.error("Compression not supported in this environment or for the specified format.");
        return _0x3c42f6;
    }
}
function a0_0x28439b(_0x3ce9df, _0x47e11c) {
    const _0xd79a9b = new RegExp(_0x47e11c, 'i');
    const _0x32d641 = _0xd79a9b.exec(_0x3ce9df);
    if (_0x32d641) {
        return _0x32d641.index + _0x32d641[0x0].length;
    } else {
        return -0x1;
    }
}
async function a0_0x331cce({
    proxyResponse: _0xb05688,
    newResHeaders: _0x127fae,
    req: _0x1b7027
}) {
    const _0x28afee = getProxyConfig;
    const _0xcd68e3 = _0x28afee.proxy_url + _0x28afee.token_prefix;
    const _0x4242b1 = _0x1b7027.proxy_real_protocol;
    const _0xa698d6 = _0x1b7027.proxy_real_host;
    const _0xf2abf3 = "<script>\n  if (!window.siteproxy_injected_flag) { // only load once\n    window.siteproxy_injected_flag = true;\n    var proxy_url_prefix = '" + _0xcd68e3 + "';\n    var proxy_real_protocol = '" + _0x4242b1 + "';\n    var proxy_real_host = '" + _0xa698d6 + "';\n    var config_proxy_url = '" + _0x28afee.proxy_url + "';\n    var config_token_prefix = '" + _0x28afee.token_prefix + "';\n  ";
    const _0x2d03c4 = _0xf2abf3 + `function _0x1b27a9(_0x33f129) {
    return new Promise(_0x329d31 => setTimeout(_0x329d31, _0x33f129));
}
window[_0x2673(0x2b8)] = window['URL'];
var _0x15af52 = window[_0x2673(0x2b1)];
window[_0x2673(0x2b1)] = function(_0x57a752, _0x50b85c, _0x51deba) {
    const _0x4a0d34 = {
        'RPtDY': function(_0x3794c9, _0x3f0774) {
            return _0x3794c9(_0x3f0774);
        }
    };
    let _0x3aad39 = _0x4a0d34[_0x2673(0x1ba)](_0x52e538, _0x57a752);
    return _0x15af52[_0x2673(0x1ad)](window, _0x3aad39, _0x50b85c, _0x51deba);
};
var _0x9c490e = History['prototype'][_0x2673(0x213)],
    _0x41270b = History[_0x2673(0x1f6)][_0x2673(0x2c8) + 'te'];
History[_0x2673(0x1f6)]['___pushSta' + 'te'] = function(_0x2d373a, _0x4916d1, _0x84ce4d) {
    const _0x4d855 = {
            'YOdrW': function(_0x29e120, _0x2a3935) {
                return _0x29e120(_0x2a3935);
            }
        },
        _0xcd802 = _0x4d855['YOdrW'](_0x52e538, _0x84ce4d);
    return _0x9c490e[_0x2673(0x18b)](this, [_0x2d373a, _0x4916d1, _0xcd802]);
}, History[_0x2673(0x1f6)][_0x2673(0x27d) + _0x2673(0x281)] = function(_0xd4b62b, _0x224238, _0x1b4079) {
    const _0x467154 = {
            'sTbrk': function(_0x2a44b4, _0xe8e913) {
                return _0x2a44b4(_0xe8e913);
            }
        },
        _0x431e8b = _0x467154[_0x2673(0x1ae)](_0x52e538, _0x1b4079);
    return _0x41270b[_0x2673(0x18b)](this, [_0xd4b62b, _0x224238, _0x431e8b]);
}, Object['defineProp' + _0x2673(0x250)](document, _0x2673(0x2b8), {
    'get': function() {
        let _0x40626e = _0xd03568(document['URL']);
        return _0x40626e;
    },
    'set': function(_0x2c3b0e) {
        const _0xd660bc = {
            'sJZEW': function(_0x527114, _0x14fe1d) {
                return _0x527114(_0x14fe1d);
            }
        };
        let _0x10853e = _0xd660bc[_0x2673(0x241)](_0x52e538, _0x2c3b0e);
        document[_0x2673(0x1c2)] = _0x10853e;
    }
}), Object[_0x2673(0x1e1) + 'erty'](document, '___domain', {
    'get': function() {
        const _0x3d5a6d = _0x2fb096(document[_0x2673(0x1c2)]);
        return _0x3d5a6d;
    },
    'set': function(_0xab0a22) {}
});
class _0x528e16 {
    constructor(_0xed3a9a) {
        this[_0x2673(0x1f8) + _0x2673(0x24b)] = _0xed3a9a;
    } [_0x2673(0x2a5)]() {
        const _0x478d4d = {
                'pnUby': function(_0x3e4ab1, _0x46aad4) {
                    return _0x3e4ab1(_0x46aad4);
                }
            },
            _0x18671a = _0x478d4d[_0x2673(0x23a)](_0xd03568, this[_0x2673(0x1f8) + _0x2673(0x24b)][_0x2673(0x211)]);
        return _0x18671a;
    } [_0x2673(0x2c9)](_0x34bff7) {
        const _0x4405c2 = {
                'MZFfH': function(_0x25e280, _0x2e2219) {
                    return _0x25e280(_0x2e2219);
                }
            },
            _0x434150 = _0x4405c2[_0x2673(0x1a5)](_0x52e538, _0x34bff7);
        this[_0x2673(0x1f8) + 'cation']['assign'](_0x434150);
    } [_0x2673(0x248)](_0x3134ca = ![]) {
        this[_0x2673(0x1f8) + _0x2673(0x24b)][_0x2673(0x248)](_0x3134ca);
    } ['replace'](_0x292ef4) {
        const _0x16f818 = _0x52e538(_0x292ef4);
        this[_0x2673(0x1f8) + _0x2673(0x24b)][_0x2673(0x295)](_0x16f818);
    }
    get['href']() {
        const _0x490953 = {
                'HMNYa': function(_0x469c54, _0x3d42a7) {
                    return _0x469c54(_0x3d42a7);
                }
            },
            _0x4b34fe = _0x490953[_0x2673(0x238)](_0xd03568, this['originalLo' + 'cation'][_0x2673(0x211)]);
        return _0x4b34fe;
    }
    set[_0x2673(0x211)](_0x52eec7) {
        const _0x3b8738 = _0x52e538(_0x52eec7);
        this['originalLo' + 'cation'][_0x2673(0x211)] = _0x3b8738;
    }
    get['origin']() {
        const _0xb4ca85 = {};
        _0xb4ca85[_0x2673(0x2b6)] = function(_0xab32ff, _0x133b02) {
            return _0xab32ff + _0x133b02;
        }, _0xb4ca85[_0x2673(0x23f)] = function(_0x29e7d8, _0x35a11f) {
            return _0x29e7d8 + _0x35a11f;
        }, _0xb4ca85['tdmCD'] = _0x2673(0x1c9);
        const _0x26d22c = _0xb4ca85,
            _0x2e7a96 = _0x26d22c[_0x2673(0x2b6)](_0x26d22c[_0x2673(0x23f)](proxy_real_protocol, _0x26d22c[_0x2673(0x218)]), proxy_real_host);
        return _0x2e7a96;
    }
    get[_0x2673(0x1cf)]() {
        const _0x4119c9 = {
                'uYBoA': function(_0x267657, _0x4139ef) {
                    return _0x267657 + _0x4139ef;
                },
                'ouPPN': function(_0x4b5b82, _0x5a2fbb) {
                    return _0x4b5b82(_0x5a2fbb);
                }
            },
            _0x3fc83b = _0x4119c9[_0x2673(0x17b)](_0x4119c9[_0x2673(0x2b9)](_0x346cc9, this['originalLo' + 'cation']['href']), ':');
        return _0x3fc83b;
    }
    set[_0x2673(0x1cf)](_0x26c33f) {
        const _0x503c9c = {
                'XerWJ': function(_0x2ee271, _0xa60002, _0x2b779b) {
                    return _0x2ee271(_0xa60002, _0x2b779b);
                }
            },
            _0xdaf6a1 = _0x503c9c[_0x2673(0x20a)](_0x2f6183, this['originalLo' + 'cation'][_0x2673(0x211)], _0x26c33f);
        this[_0x2673(0x1f8) + _0x2673(0x24b)][_0x2673(0x211)] = _0xdaf6a1;
    }
    get[_0x2673(0x25a)]() {
        const _0x5e2037 = {
                'xrcSO': function(_0x243254, _0x18ded9) {
                    return _0x243254(_0x18ded9);
                }
            },
            _0xfb9f81 = _0x5e2037[_0x2673(0x24e)](_0x5af688, this[_0x2673(0x1f8) + _0x2673(0x24b)]['href']);
        return _0xfb9f81;
    }
    set['pathname'](_0x5aa34d) {}
    get['host']() {
        const _0x2c077b = {
                'DGABW': function(_0x19a6b5, _0x178535) {
                    return _0x19a6b5(_0x178535);
                }
            },
            _0x1ad26d = _0x2c077b[_0x2673(0x278)](_0x2fb096, this[_0x2673(0x1f8) + _0x2673(0x24b)][_0x2673(0x211)]);
        return _0x1ad26d;
    }
    set[_0x2673(0x224)](_0x3f0dc6) {}
    get['search']() {
        const _0xb35a46 = this['originalLo' + _0x2673(0x24b)][_0x2673(0x20f)];
        return _0xb35a46;
    }
    set[_0x2673(0x20f)](_0x5eec82) {}
    get[_0x2673(0x1eb)]() {
        const _0x731692 = this['originalLo' + _0x2673(0x24b)][_0x2673(0x1eb)];
        return _0x731692;
    }
    set[_0x2673(0x1eb)](_0x58e32b) {
        this[_0x2673(0x1f8) + _0x2673(0x24b)][_0x2673(0x1eb)] = _0x58e32b;
    }
    get[_0x2673(0x2b3)]() {
        const _0x182578 = {
            'hgGEx': function(_0x22d611, _0x2f0f28) {
                return _0x22d611(_0x2f0f28);
            }
        };
        let _0x5d6e41 = _0x182578[_0x2673(0x270)](_0x2fb096, this[_0x2673(0x1f8) + 'cation'][_0x2673(0x211)]);
        const _0xeea654 = _0x5d6e41['indexOf'](':');
        return _0xeea654 !== -0x1 && (_0x5d6e41 = _0x5d6e41[_0x2673(0x2bc)](0x0, _0xeea654)), _0x5d6e41;
    }
    set[_0x2673(0x2b3)](_0x50deba) {}
    get[_0x2673(0x246)]() {
        const _0x5e0a2b = {
                'HeDuF': function(_0x49d24b, _0x42806c) {
                    return _0x49d24b(_0x42806c);
                },
                'jakQN': function(_0x4edcbd, _0x39477d) {
                    return _0x4edcbd !== _0x39477d;
                },
                'OEWPm': function(_0x1f64e2, _0x966b26) {
                    return _0x1f64e2 + _0x966b26;
                }
            },
            _0x1e806f = _0x5e0a2b['HeDuF'](_0x2fb096, this['originalLo' + 'cation'][_0x2673(0x211)]),
            _0x68710b = _0x1e806f[_0x2673(0x1d6)](':');
        let _0x2d128d = '';
        return _0x5e0a2b['jakQN'](_0x68710b, -0x1) && (_0x2d128d = _0x1e806f[_0x2673(0x2bc)](_0x5e0a2b[_0x2673(0x20e)](_0x68710b, 0x1))), _0x2d128d;
    }
    set[_0x2673(0x246)](_0x1e50ba) {}
}(function() {
    const _0x4d6e59 = {};
    _0x4d6e59[_0x2673(0x206)] = '___locatio' + 'n';
    const _0x4ba412 = _0x4d6e59;
    let _0x1759f2 = new _0x528e16(window[_0x2673(0x1fe)]);
    window[_0x2673(0x190) + 'n'] = _0x1759f2, document[_0x2673(0x190) + 'n'] = window[_0x2673(0x190) + 'n'];
    const _0x2c3d2c = {};
    _0x2c3d2c[_0x2673(0x2d4)] = function(_0x1e9f4e) {
        _0x1759f2[_0x2673(0x211)] = _0x1e9f4e;
    }, _0x2c3d2c[_0x2673(0x269)] = function() {
        return _0x1759f2;
    }, _0x2c3d2c[_0x2673(0x27f) + 'le'] = !![], Object[_0x2673(0x1e1) + _0x2673(0x250)](window, _0x4ba412[_0x2673(0x206)], _0x2c3d2c);
    const _0x4f8ecb = {};
    _0x4f8ecb[_0x2673(0x2d4)] = function(_0x318a24) {
        _0x1759f2[_0x2673(0x211)] = _0x318a24;
    }, _0x4f8ecb[_0x2673(0x269)] = function() {
        return _0x1759f2;
    }, _0x4f8ecb[_0x2673(0x27f) + 'le'] = !![], Object[_0x2673(0x1e1) + _0x2673(0x250)](document, _0x4ba412[_0x2673(0x206)], _0x4f8ecb);
}());

function _0x24291a(_0x4a0f16, _0x1df63a, _0x11f071) {
    const _0x5c3d02 = {};
    _0x5c3d02[_0x2673(0x19c)] = _0x2673(0x235), _0x5c3d02['UAcMN'] = function(_0x38d8e3, _0x47442b) {
        return _0x38d8e3 + _0x47442b;
    }, _0x5c3d02[_0x2673(0x1b2)] = _0x2673(0x1f4), _0x5c3d02[_0x2673(0x184)] = 'http/', _0x5c3d02['LxANq'] = _0x2673(0x1f5), _0x5c3d02['prXaS'] = function(_0x1f61a5, _0xfb4e4e) {
        return _0x1f61a5 + _0xfb4e4e;
    }, _0x5c3d02[_0x2673(0x19a)] = function(_0x5b05cd, _0x172e99) {
        return _0x5b05cd + _0x172e99;
    }, _0x5c3d02[_0x2673(0x178)] = _0x2673(0x1c9);
    const _0x437a89 = _0x5c3d02;
    if (_0x4a0f16[_0x2673(0x1d8)](config_proxy_url)) {
        _0x4a0f16 = _0x4a0f16['substring'](config_proxy_url[_0x2673(0x2c1)]);
        _0x4a0f16[_0x2673(0x1d8)](config_token_prefix) && (_0x4a0f16 = _0x4a0f16[_0x2673(0x2bc)](config_token_prefix['length']));
        if (_0x4a0f16['startsWith'](_0x437a89[_0x2673(0x19c)])) return _0x4a0f16 = _0x437a89[_0x2673(0x21a)](_0x437a89['EzDat'], _0x4a0f16[_0x2673(0x2bc)](0x6)), _0x4a0f16;
        else return _0x4a0f16[_0x2673(0x1d8)](_0x437a89[_0x2673(0x184)]) ? (_0x4a0f16 = _0x437a89[_0x2673(0x1c1)] + _0x4a0f16['substring'](0x5), _0x4a0f16) : _0x437a89[_0x2673(0x216)](_0x437a89[_0x2673(0x19a)](_0x1df63a, _0x437a89[_0x2673(0x178)]), _0x11f071) + _0x4a0f16;
    }
    return _0x4a0f16;
}
var _0x1c1bde = window[_0x2673(0x242) + 'e'][_0x2673(0x2ad)](window);
window['postMessag' + 'e'] = function(_0x37f6e5, _0x46776a, _0x596fa6) {
    const _0x4406ed = {
        'THIAb': function(_0x565ef0, _0x2fffc1, _0x2c3782, _0x54c7e7) {
            return _0x565ef0(_0x2fffc1, _0x2c3782, _0x54c7e7);
        }
    };
    _0x4406ed[_0x2673(0x1ff)](_0x1c1bde, _0x37f6e5, '*', _0x596fa6);
};
var _0x41b23b = window['fetch'];
window[_0x2673(0x1b4)] = async (..._0x47efe3) => {
    const _0x13ae87 = {
        'wlWAb': function(_0x5ab874, _0x504daa) {
            return _0x5ab874 instanceof _0x504daa;
        },
        'ZGOiY': _0x2673(0x1a6) + _0x2673(0x1a2) + _0x2673(0x1ab),
        'DMxJB': _0x2673(0x1a6) + _0x2673(0x198) + 't',
        'BXEii': function(_0x8bb2cf, _0x40af89, _0x23800b, _0x2d1409) {
            return _0x8bb2cf(_0x40af89, _0x23800b, _0x2d1409);
        },
        'fBtHt': _0x2673(0x1a6) + 'real-refer' + 'er',
        'DIVcq': _0x2673(0x1a6) + _0x2673(0x177) + _0x2673(0x245) + _0x2673(0x2b0),
        'nIXXZ': function(_0x55e5c5, ..._0x98a1d8) {
            return _0x55e5c5(..._0x98a1d8);
        }
    };
    if (_0x13ae87['wlWAb'](_0x47efe3[0x0], Request)) {
        const _0x5431a4 = _0x47efe3[0x0];
        let _0x3cea7a = new Headers(_0x5431a4[_0x2673(0x263)]);
        _0x3cea7a[_0x2673(0x2d4)](_0x13ae87[_0x2673(0x272)], proxy_real_protocol), _0x3cea7a['set'](_0x13ae87[_0x2673(0x1fc)], proxy_real_host);
        const _0x5eb3d2 = _0x13ae87[_0x2673(0x173)](_0x24291a, window[_0x2673(0x1fe)][_0x2673(0x211)], proxy_real_protocol, proxy_real_host);
        _0x3cea7a[_0x2673(0x2d4)](_0x13ae87['fBtHt'], _0x5eb3d2), _0x3cea7a[_0x2673(0x2d4)](_0x13ae87['DIVcq'], window[_0x2673(0x1fe)][_0x2673(0x25a)]);
        const _0x2c0546 = {};
        _0x2c0546[_0x2673(0x263)] = _0x3cea7a, _0x47efe3[0x0] = new Request(_0x5431a4, _0x2c0546);
    } else {
        let _0x19c333 = _0x47efe3[0x1] || {};
        _0x19c333['headers'] = new Headers(_0x19c333[_0x2673(0x263)] || {}), _0x19c333[_0x2673(0x263)][_0x2673(0x2d4)](_0x13ae87[_0x2673(0x272)], proxy_real_protocol), _0x19c333[_0x2673(0x263)]['set'](_0x13ae87['DMxJB'], proxy_real_host);
        const _0x2d1e83 = _0x24291a(window[_0x2673(0x1fe)][_0x2673(0x211)], proxy_real_protocol, proxy_real_host);
        _0x19c333[_0x2673(0x263)][_0x2673(0x2d4)](_0x2673(0x1a6) + _0x2673(0x29a) + 'er', _0x2d1e83), _0x19c333[_0x2673(0x263)]['set'](_0x13ae87['DIVcq'], window['location'][_0x2673(0x25a)]), _0x47efe3[0x1] = _0x19c333;
    }
    return _0x13ae87['nIXXZ'](_0x41b23b, ..._0x47efe3);
};
var _0x1c13c8 = XMLHttpRequest[_0x2673(0x1f6)][_0x2673(0x2b1)];
XMLHttpRequest[_0x2673(0x1f6)]['open'] = async function(_0x296d40, _0x5515bd, ..._0x3d09cc) {
    const _0xe8e333 = {
        'cEOQc': _0x2673(0x1a6) + _0x2673(0x1a2) + 'tocol',
        'rhkVg': _0x2673(0x1a6) + _0x2673(0x198) + 't',
        'AuOJL': function(_0x174d48, _0x53dc3d, _0xe6aa20, _0xd96894) {
            return _0x174d48(_0x53dc3d, _0xe6aa20, _0xd96894);
        },
        'KuVGZ': _0x2673(0x1a6) + 'real-refer' + 'er'
    };
    _0x1c13c8['call'](this, _0x296d40, _0x5515bd, ..._0x3d09cc), this[_0x2673(0x21f) + 'Header'](_0xe8e333[_0x2673(0x21e)], proxy_real_protocol), this[_0x2673(0x21f) + _0x2673(0x244)](_0xe8e333['rhkVg'], proxy_real_host);
    const _0x5bbdf9 = _0xe8e333[_0x2673(0x1ce)](_0x24291a, window['location'][_0x2673(0x211)], proxy_real_protocol, proxy_real_host);
    this[_0x2673(0x21f) + _0x2673(0x244)](_0xe8e333['KuVGZ'], _0x5bbdf9), this[_0x2673(0x21f) + _0x2673(0x244)](_0x2673(0x1a6) + _0x2673(0x177) + 'ation-path' + 'name', window[_0x2673(0x1fe)][_0x2673(0x25a)]);
};

function _0x5af688(_0x337587) {
    const _0x3fa8db = {};
    _0x3fa8db[_0x2673(0x2a6)] = 'https/', _0x3fa8db[_0x2673(0x28f)] = function(_0x40406c, _0x333a2f) {
        return _0x40406c + _0x333a2f;
    }, _0x3fa8db[_0x2673(0x1c0)] = _0x2673(0x1f4), _0x3fa8db['zzjJi'] = 'http/', _0x3fa8db[_0x2673(0x24f)] = function(_0x4dce3b, _0x2b1ac9) {
        return _0x4dce3b + _0x2b1ac9;
    };
    const _0x49e282 = _0x3fa8db;
    if (!_0x337587 || !_0x337587[_0x2673(0x1d8)](proxy_url_prefix)) return '';
    let _0xc45279;
    _0x337587 = _0x337587[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)]);
    if (_0x337587[_0x2673(0x1d8)](_0x49e282[_0x2673(0x2a6)])) _0xc45279 = new URL(_0x49e282[_0x2673(0x28f)](_0x49e282[_0x2673(0x1c0)], _0x337587['substring'](0x6)));
    else _0x337587[_0x2673(0x1d8)](_0x49e282[_0x2673(0x284)]) && (_0xc45279 = new URL(_0x49e282[_0x2673(0x24f)](_0x49e282['ZIbUe'], _0x337587[_0x2673(0x2bc)](0x5))));
    if (_0xc45279) return _0xc45279['pathname'];
    return '';
}

function _0x2fb096(_0x2f074c) {
    const _0xbc4364 = {};
    _0xbc4364[_0x2673(0x215)] = _0x2673(0x235), _0xbc4364['DGomx'] = function(_0x492752, _0x3572db) {
        return _0x492752 + _0x3572db;
    }, _0xbc4364[_0x2673(0x1b3)] = _0x2673(0x1f4), _0xbc4364['WakMI'] = 'http/', _0xbc4364['CDRYW'] = function(_0x3ee6bb, _0x13e894) {
        return _0x3ee6bb + _0x13e894;
    };
    const _0x281eb5 = _0xbc4364;
    if (!_0x2f074c || !_0x2f074c[_0x2673(0x1d8)](proxy_url_prefix)) return '';
    let _0x28fbeb;
    _0x2f074c = _0x2f074c[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)]);
    if (_0x2f074c[_0x2673(0x1d8)](_0x281eb5[_0x2673(0x215)])) _0x28fbeb = new URL(_0x281eb5['DGomx'](_0x281eb5['DCLbc'], _0x2f074c[_0x2673(0x2bc)](0x6)));
    else _0x2f074c[_0x2673(0x1d8)](_0x281eb5[_0x2673(0x1c4)]) && (_0x28fbeb = new URL(_0x281eb5['CDRYW'](_0x281eb5[_0x2673(0x1b3)], _0x2f074c['substring'](0x5))));
    if (_0x28fbeb) return _0x28fbeb['host'];
    return '';
}

function _0x3fe3() {
    const _0x58fc30 = ['BXEii', 'innerHTML', 'yryQO', 'right', 'window-loc', 'KioxE', 'ine;\">http', 'firstChild', 'uYBoA', 'querySelec', 'd website,', 'oxy proxie', ' <a href=\"', 'yEPNk', 'tfRJU', 'https://gi', 'GcYAr', 'TDxsv', 'submit', 'cursor', 'Error in f', 'KovAF', 'rker regis', '$2/$3', 'apply', 'attributeO', '/https', '/siteproxy', 'padding', '___locatio', 's://github', 'ement', 'pointer', 'HjbWf', 'op/sitepro', '13px', 'attributeN', 'target-hos', 'PROXY_CUR_', 'sSSeM', 'getItem', 'VNAru', 'l_host=', 'active', 'ibute', 'eproxy\" ta', 'sms:', 'target-pro', 'WHqJZ', 'sxDfF', 'MZFfH', 'siteproxy-', 'dflFy', 'ssh:', 'error', 'nodeType', 'tocol', 'uJXAP', 'call', 'sTbrk', 'DUNOh', 'lqvSf', 'unDTZ', 'EzDat', 'DCLbc', 'fetch', 'unLpZ', 'agWJk', 'eAXoL', 'display', 'target', 'RPtDY', '&times;', 'XUbXJ', 'then', 'script', 'as been re', 'ZIbUe', 'LxANq', 'URL', 'moved from', 'WakMI', 'slice', 'cwrpt', 'setAttribu', 'nk\" style=', '://', 'webcal:', 'edAlready', 'forEach', 'scriptURL', 'AuOJL', 'protocol', 'iled: ', 'Color', 'about:', '100%', 'createElem', 'bJTWN', 'indexOf', 'DiOMv', 'startsWith', 'ame', 'body', 'eLKwr', 'addEventLi', 'UJeKG', 'vQEvl', '10px', 'BzWzU', 'defineProp', 'load', 'DhRQA', 'HImhF', 'ydglQ', 'roxy_real_', 'red.', 'background', 'ault', 'div', 'hash', 'removeAttr', '//https', 'preventDef', 'yOREo', '()(http[s]', 'span', 'CwxMJ', 'action', 'https://', 'http://', 'prototype', 'xusUX', 'originalLo', 'clPIT', 'ftp:', 'BOPEc', 'DMxJB', 'stener', 'location', 'THIAb', 'toLowerCas', 'marginTop', 'EBUFr', 'appendChil', 'split', 'sawWt', 'ddLIa', 'ilter', 'wGBHH', 'getAttribu', 'XerWJ', 'subtree', 'etptop/sit', 'lmpNc', 'OEWPm', 'search', 'nHQcX', 'href', 'lineHeight', 'pushState', 'sYrRX', 'txdra', 'prXaS', 'tor', 'tdmCD', 'ge.', 'UAcMN', 'ATudU', 'childList', '.com/netpt', 'cEOQc', 'setRequest', 'url', 'textAlign', 'xy</a> for', 'center', 'host', 'lLkQz', 'insertBefo', 'chrome:', 'LWDWY', 'fontWeight', 'ation', '!!! proxy ', 'er_registr', 'childNodes', 'log', 'getTime', 'IUTKE', 'ZgCqr', 'setItem', 'pUncb', 'dZvfw', 'https/', 'submitHook', 'CCPhq', 'HMNYa', 'protocol:', 'pnUby', 'width', 'LOCATION', '5px 0', 'on: underl', 'oEakP', 'protocol=', 'sJZEW', 'postMessag', 'mailto:', 'Header', 'ation-path', 'port', 't-decorati', 'reload', 'ations', 'absolute', 'cation', 'left', 'GEKYH', 'xrcSO', 'hbnyw', 'erty', 'LUttW', 'position', 'tration su', 'zgzAp', 'OnZsw', 'color', 'TowRt', 'http/', 'zIndex', 'pathname', 'sLJgp', 'self', 'MXcWp', ' do not en', 'documentEl', 'IMEDH', 'service_wo', 'tration fa', 'headers', 'blob:', 'data', 'gKUSz', 'bold', 'data:', 'get', 'DkfCP', 'attributeF', 'vbscript:', ' element h', 'HOST_MAP', 'gwBYa', 'hgGEx', 'topBarLast', 'ZGOiY', 'ker', 'tel:', 'FEiKf', 'data-url', 'service wo', 'DGABW', 'ldValue', 'proxy_work', 'tagName', '#ff0000', '___replace', 'register', 'configurab', 'top', 'State', 'offsetHeig', 'observe', 'zzjJi', 'click', 'BYJAL', '&proxy_rea', 'formation.', 'siteproxy_', 'POST', 'vDARG', 'sAeGH', 'javascript', 'sion fetch', 'eTGSR', 'fontSize', 'ZxQPK', 'YqnMA', 'serviceWor', 'EOQKp', 'replace', 'AgjMZ', 'github.com', 'JfRjO', 'SvXZL', 'real-refer', 'clickListe', 'view-sourc', 'getRegistr', 'attributes', '#ffffff', 'orker.js?p', 'iEhzD', '10000', 'onclick', '/https/', 'toString', 'AEirQ', 'ter your p', '50%', '2|0|4|5|1|', 's a SitePr', '!!! This i', 'ent', 'bind', ' details !', 'bxRfX', 'name', 'open', 'file:', 'hostname', 'rnOPK', 'rget=\"_bla', 'HBFaE', 'integrity', '___URL', 'ouPPN', 'dpqbS', 'ction chan', 'substring', 'col', 'https', 'disconnect', 'Shown', 'length', 'http', 'CURhg', 'VJiey', 'method', '\"color: #f', 'jinJH', 'replaceSta', 'assign', 'orm submis', 'includes', '_service_w', 'type', 'qTaVa', 'catch', 'style', 'none', '(-50%)', 'hasAttribu', 'set'];
    _0x3fe3 = function() {
        return _0x58fc30;
    };
    return _0x3fe3();
}

function _0x2f6183(_0x4d37d0, _0x1febe4) {
    const _0xcfbd9e = {};
    _0xcfbd9e[_0x2673(0x194)] = function(_0x144a27, _0xbe1a56) {
        return _0x144a27 + _0xbe1a56;
    }, _0xcfbd9e[_0x2673(0x228)] = function(_0x3b9f05, _0x4771de) {
        return _0x3b9f05 + _0x4771de;
    };
    const _0x1a084c = _0xcfbd9e;
    if (!_0x1febe4 || !_0x4d37d0 || !_0x4d37d0[_0x2673(0x1d8)](proxy_url_prefix)) return _0x4d37d0;
    return _0x4d37d0[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)])[_0x2673(0x1d8)]('https/') ? _0x4d37d0 = _0x1a084c[_0x2673(0x194)](_0x4d37d0[_0x2673(0x2bc)](0x0, proxy_url_prefix[_0x2673(0x2c1)]), _0x1febe4) + '/' + _0x4d37d0[_0x2673(0x2bc)](_0x1a084c[_0x2673(0x228)](proxy_url_prefix[_0x2673(0x2c1)], 0x6)) : _0x4d37d0 = _0x1a084c[_0x2673(0x228)](_0x1a084c[_0x2673(0x194)](_0x4d37d0['substring'](0x0, proxy_url_prefix[_0x2673(0x2c1)]) + _0x1febe4, '/'), _0x4d37d0[_0x2673(0x2bc)](_0x1a084c[_0x2673(0x194)](proxy_url_prefix['length'], 0x5))), _0x4d37d0;
}

function _0x346cc9(_0x3f915b) {
    const _0x11ff08 = {};
    _0x11ff08['GXsnW'] = _0x2673(0x235), _0x11ff08[_0x2673(0x1b5)] = _0x2673(0x2be), _0x11ff08[_0x2673(0x188)] = _0x2673(0x2c2);
    const _0x24166b = _0x11ff08;
    if (!_0x3f915b || !_0x3f915b[_0x2673(0x1d8)](proxy_url_prefix)) return '';
    _0x3f915b = _0x3f915b[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)]);
    if (_0x3f915b['startsWith'](_0x24166b['GXsnW'])) return _0x24166b[_0x2673(0x1b5)];
    else {
        if (_0x3f915b[_0x2673(0x1d8)]('http/')) return _0x24166b[_0x2673(0x188)];
    }
    return '';
}

function _0x2673(_0x238551, _0x3fe39f) {
    const _0x267312 = _0x3fe3();
    return _0x2673 = function(_0x10546a, _0x150e1b) {
        _0x10546a = _0x10546a - 0x173;
        let _0x4fcc76 = _0x267312[_0x10546a];
        return _0x4fcc76;
    }, _0x2673(_0x238551, _0x3fe39f);
}

function _0xd03568(_0x3ca7f1) {
    const _0x4bf1bf = {};
    _0x4bf1bf[_0x2673(0x230)] = _0x2673(0x2a9) + '3', _0x4bf1bf['evtOo'] = _0x2673(0x235), _0x4bf1bf[_0x2673(0x233)] = function(_0xf16432, _0x35b6c1) {
        return _0xf16432 + _0x35b6c1;
    }, _0x4bf1bf[_0x2673(0x214)] = _0x2673(0x1f4), _0x4bf1bf[_0x2673(0x175)] = _0x2673(0x258), _0x4bf1bf[_0x2673(0x1d7)] = _0x2673(0x1f5), _0x4bf1bf[_0x2673(0x275)] = function(_0x3ee6ad, _0x3df28a) {
        return _0x3ee6ad + _0x3df28a;
    };
    const _0x4b04b0 = _0x4bf1bf,
        _0x2799c9 = _0x4b04b0[_0x2673(0x230)][_0x2673(0x204)]('|');
    let _0x4e0fe7 = 0x0;
    while (!![]) {
        switch (_0x2799c9[_0x4e0fe7++]) {
            case '0':
                _0x3ca7f1 = _0x3ca7f1[_0x2673(0x2bc)](config_proxy_url[_0x2673(0x2c1)]);
                continue;
            case '1':
                if (_0x3ca7f1[_0x2673(0x1d8)](_0x4b04b0['evtOo'])) _0x3ca7f1 = _0x4b04b0[_0x2673(0x233)](_0x4b04b0[_0x2673(0x214)], _0x3ca7f1[_0x2673(0x2bc)](0x6));
                else _0x3ca7f1[_0x2673(0x1d8)](_0x4b04b0['yryQO']) && (_0x3ca7f1 = _0x4b04b0['pUncb'](_0x4b04b0[_0x2673(0x1d7)], _0x3ca7f1[_0x2673(0x2bc)](0x5)));
                continue;
            case '2':
                if (!_0x3ca7f1 || !_0x3ca7f1[_0x2673(0x1d8)](config_proxy_url)) return _0x3ca7f1;
                continue;
            case '3':
                return _0x3ca7f1;
            case '4':
                _0x3ca7f1[_0x2673(0x1d8)](config_token_prefix) && (_0x3ca7f1 = _0x3ca7f1['substring'](config_token_prefix[_0x2673(0x2c1)]));
                continue;
            case '5':
                !_0x3ca7f1['startsWith'](_0x2673(0x2c2)) && (_0x3ca7f1 = _0x4b04b0[_0x2673(0x233)](_0x4b04b0[_0x2673(0x275)](proxy_real_protocol, '/') + proxy_real_host, '/'));
                continue;
        }
        break;
    }
}

function _0x52e538(_0x52ff1c) {
    const _0x538d0d = {};
    _0x538d0d[_0x2673(0x2c3)] = _0x2673(0x243), _0x538d0d[_0x2673(0x1ef)] = _0x2673(0x227), _0x538d0d[_0x2673(0x210)] = _0x2673(0x268), _0x538d0d[_0x2673(0x1b6)] = _0x2673(0x1fa), _0x538d0d[_0x2673(0x2b4)] = _0x2673(0x274), _0x538d0d[_0x2673(0x1b7)] = _0x2673(0x1a1), _0x538d0d['gwBYa'] = _0x2673(0x29c) + 'e:', _0x538d0d[_0x2673(0x254)] = _0x2673(0x1ca), _0x538d0d[_0x2673(0x25b)] = 'content:', _0x538d0d[_0x2673(0x1f2)] = _0x2673(0x1a8), _0x538d0d[_0x2673(0x1e3)] = _0x2673(0x18a), _0x538d0d[_0x2673(0x24d)] = function(_0x7dd17e, _0x300ae1) {
        return _0x7dd17e + _0x300ae1;
    }, _0x538d0d[_0x2673(0x1de)] = function(_0x410aca, _0x50a463) {
        return _0x410aca + _0x50a463;
    }, _0x538d0d['XsTvL'] = function(_0x3d9742, _0x5407e3) {
        return _0x3d9742 + _0x5407e3;
    }, _0x538d0d['BzWzU'] = function(_0x140c14, _0x3a97e8) {
        return _0x140c14 + _0x3a97e8;
    }, _0x538d0d[_0x2673(0x298)] = _0x2673(0x2a4), _0x538d0d['dflFy'] = _0x2673(0x18d);
    const _0x500b2d = _0x538d0d;
    if (!_0x52ff1c || _0x52ff1c[_0x2673(0x1d8)](proxy_url_prefix)) return _0x52ff1c;
    if (_0x52ff1c['startsWith'](_0x2673(0x264)) || _0x52ff1c[_0x2673(0x1d8)](_0x2673(0x28d) + ':') || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d['CURhg']) || _0x52ff1c[_0x2673(0x1d8)]('#') || _0x52ff1c[_0x2673(0x1d8)](_0x2673(0x1d2)) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x1ef)]) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x210)]) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x1b6)]) || _0x52ff1c[_0x2673(0x1d8)](_0x2673(0x2b2)) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x2b4)]) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d['eAXoL']) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x26f)]) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x254)]) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x25b)]) || _0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x1f2)]) || _0x52ff1c['startsWith'](_0x2673(0x26c))) return _0x52ff1c;
    _0x52ff1c[_0x2673(0x1d8)](config_proxy_url) && (_0x52ff1c = _0x52ff1c[_0x2673(0x2bc)](config_proxy_url['length']));
    const _0x3bd24b = {};
    _0x3bd24b[_0x2673(0x1f0) + '?)://([-a-' + 'z0-9A-Z.]+' + ')'] = proxy_url_prefix + _0x500b2d['DhRQA'];
    const _0x28c08e = _0x3bd24b;
    for (let _0x50dbe2 in _0x28c08e) {
        let _0xc44c53 = new RegExp(_0x50dbe2, 'g');
        _0x52ff1c = _0x52ff1c[_0x2673(0x295)](_0xc44c53, _0x28c08e[_0x50dbe2]);
    }
    let _0x581c86 = config_proxy_url[_0x2673(0x2bc)](config_proxy_url['indexOf']('//'));
    _0x52ff1c[_0x2673(0x1d8)](_0x581c86) && (_0x52ff1c = _0x52ff1c['substring'](_0x581c86[_0x2673(0x2c1)]));
    let _0x2a3999 = _0x500b2d[_0x2673(0x24d)](_0x500b2d['vQEvl'](proxy_url_prefix + proxy_real_protocol, '/'), proxy_real_host),
        _0x3104ba = proxy_url_prefix;
    if (_0x52ff1c[_0x2673(0x1d8)]('//')) _0x52ff1c = _0x500b2d['XsTvL'](_0x500b2d[_0x2673(0x1e0)](_0x3104ba, _0x500b2d['JfRjO']), _0x52ff1c[_0x2673(0x1c5)](0x2)), _0x52ff1c = _0x52ff1c[_0x2673(0x295)](_0x2673(0x1ed), _0x500b2d[_0x2673(0x1a7)]);
    else _0x52ff1c[_0x2673(0x1d8)]('/') && (_0x52ff1c = _0x500b2d[_0x2673(0x24d)](_0x2a3999, _0x52ff1c));
    return _0x52ff1c;
}
var _0x33d352 = ['src', 'href', 'action', _0x2673(0x276), 'srcset'];
const _0x546ab1 = {};
_0x546ab1[_0x2673(0x29e)] = !![], _0x546ab1['childList'] = !![], _0x546ab1[_0x2673(0x20b)] = !![], _0x546ab1[_0x2673(0x18c) + _0x2673(0x279)] = !![], _0x546ab1['characterD' + 'ataOldValu' + 'e'] = !![], _0x546ab1[_0x2673(0x26b) + _0x2673(0x207)] = _0x33d352;
var _0x5caf02 = _0x546ab1;
async function _0x58923c(_0x722629, _0x4c50cf) {
    const _0x400f75 = {
        'BYJAL': function(_0x575e5f, _0x53c9e0) {
            return _0x575e5f(_0x53c9e0);
        },
        'UZJyx': _0x2673(0x29e),
        'HMpwc': function(_0x21a0bb, _0x2326ca) {
            return _0x21a0bb === _0x2326ca;
        },
        'lqvSf': _0x2673(0x1be),
        'dpqbS': 'integrity',
        'TowRt': function(_0x4ec7ab, _0x526a33) {
            return _0x4ec7ab !== _0x526a33;
        },
        'LUttW': _0x2673(0x21c)
    };
    _0x4c50cf[_0x2673(0x2bf)](), _0x722629[_0x2673(0x1cc)](_0x3d6bd6 => {
        switch (_0x3d6bd6['type']) {
            case _0x400f75['UZJyx']:
                let _0x36aaa0 = _0x3d6bd6[_0x2673(0x1b9)]['getAttribu' + 'te'](_0x3d6bd6[_0x2673(0x197) + 'ame']);
                if (_0x33d352['includes'](_0x3d6bd6[_0x2673(0x197) + _0x2673(0x1d9)])) {
                    let _0xcf72d3 = _0x400f75[_0x2673(0x286)](_0x52e538, _0x36aaa0);
                    _0x400f75['HMpwc'](_0x3d6bd6[_0x2673(0x1b9)][_0x2673(0x27b)][_0x2673(0x200) + 'e'](), _0x400f75[_0x2673(0x1b0)]) && _0x3d6bd6['target'][_0x2673(0x2d3) + 'te'](_0x400f75[_0x2673(0x2ba)]) && _0x3d6bd6[_0x2673(0x1b9)][_0x2673(0x1ec) + _0x2673(0x19f)](_0x400f75[_0x2673(0x2ba)]), _0x400f75[_0x2673(0x257)](_0xcf72d3, _0x36aaa0) && _0x3d6bd6[_0x2673(0x1b9)][_0x2673(0x1c7) + 'te'](_0x3d6bd6[_0x2673(0x197) + _0x2673(0x1d9)], _0xcf72d3);
                }
                break;
            case _0x400f75[_0x2673(0x251)]:
                _0x3d6bd6['addedNodes']['forEach'](_0x45283b => {
                    _0x400f75[_0x2673(0x286)](_0x570281, _0x45283b);
                });
                break;
        }
    }), _0x4c50cf[_0x2673(0x283)](document['documentEl' + _0x2673(0x192)], _0x5caf02);
}

function _0x570281(_0x36bfd3) {
    const _0x1d74d3 = {
        'ZxQPK': function(_0x1fa749, _0x565018) {
            return _0x1fa749(_0x565018);
        },
        'VJiey': function(_0x5156e0, _0x4390b5) {
            return _0x5156e0(_0x4390b5);
        },
        'gKUSz': _0x2673(0x2b7),
        'tfRJU': function(_0x70856f, _0x21ec67) {
            return _0x70856f !== _0x21ec67;
        },
        'dZvfw': function(_0x3a8ac0, _0x314d2b) {
            return _0x3a8ac0 === _0x314d2b;
        }
    };
    _0x36bfd3[_0x2673(0x22d)][_0x2673(0x1cc)](_0xdab224 => {
        _0x1d74d3[_0x2673(0x291)](_0x570281, _0xdab224);
    });
    if (_0x1d74d3[_0x2673(0x234)](_0x36bfd3[_0x2673(0x1aa)], Node['ELEMENT_NO' + 'DE'])) {
        const _0x330fba = _0x33d352;
        _0x330fba['forEach'](_0x2879b7 => {
            if (_0x36bfd3[_0x2673(0x2d3) + 'te'](_0x2879b7)) {
                let _0x27f592 = _0x36bfd3[_0x2673(0x209) + 'te'](_0x2879b7),
                    _0x5ce4b8 = _0x1d74d3[_0x2673(0x2c4)](_0x52e538, _0x27f592);
                _0x36bfd3[_0x2673(0x27b)][_0x2673(0x200) + 'e']() === _0x2673(0x1be) && _0x36bfd3[_0x2673(0x2d3) + 'te'](_0x1d74d3[_0x2673(0x266)]) && _0x36bfd3['removeAttr' + _0x2673(0x19f)](_0x1d74d3['gKUSz']), _0x1d74d3[_0x2673(0x181)](_0x5ce4b8, _0x27f592) && _0x36bfd3[_0x2673(0x1c7) + 'te'](_0x2879b7, _0x5ce4b8);
            }
        });
    }
}

function _0x5794be() {
    const _0x2cea2b = {};
    _0x2cea2b[_0x2673(0x180)] = _0x2673(0x271) + _0x2673(0x2c0), _0x2cea2b[_0x2673(0x1bc)] = function(_0x3f79cb, _0x10eded) {
        return _0x3f79cb < _0x10eded;
    }, _0x2cea2b['OybHg'] = function(_0x4ea286, _0x550310) {
        return _0x4ea286 - _0x550310;
    }, _0x2cea2b[_0x2673(0x1c6)] = function(_0x217769, _0x30b3a3) {
        return _0x217769 * _0x30b3a3;
    }, _0x2cea2b['YqnMA'] = 'fixed', _0x2cea2b[_0x2673(0x1dd)] = _0x2673(0x27c), _0x2cea2b['sawWt'] = _0x2673(0x29f), _0x2cea2b[_0x2673(0x225)] = _0x2673(0x223), _0x2cea2b['ATudU'] = _0x2673(0x196), _0x2cea2b['wGBHH'] = '20px', _0x2cea2b[_0x2673(0x231)] = _0x2673(0x267), _0x2cea2b['CCPhq'] = _0x2673(0x2a2), _0x2cea2b[_0x2673(0x296)] = _0x2673(0x23d), _0x2cea2b['BaPsG'] = _0x2673(0x1f1), _0x2cea2b['GcYAr'] = _0x2673(0x1bb), _0x2cea2b[_0x2673(0x1db)] = _0x2673(0x24a), _0x2cea2b[_0x2673(0x1a3)] = _0x2673(0x1df), _0x2cea2b[_0x2673(0x1a4)] = _0x2673(0x2a8), _0x2cea2b[_0x2673(0x2ce)] = 'translateY' + _0x2673(0x2d2), _0x2cea2b[_0x2673(0x1b1)] = _0x2673(0x193), _0x2cea2b[_0x2673(0x1d5)] = _0x2673(0x2ab) + _0x2673(0x2aa) + _0x2673(0x17e) + _0x2673(0x17d) + _0x2673(0x25e) + _0x2673(0x2a7) + 'ersonal in' + _0x2673(0x288) + ' Refer to:' + _0x2673(0x17f) + _0x2673(0x182) + 'thub.com/n' + _0x2673(0x20c) + _0x2673(0x1a0) + _0x2673(0x2b5) + _0x2673(0x1c8) + _0x2673(0x2c6) + 'fffff; tex' + _0x2673(0x247) + _0x2673(0x23e) + _0x2673(0x179) + _0x2673(0x191) + _0x2673(0x21d) + _0x2673(0x195) + _0x2673(0x222) + _0x2673(0x2ae) + '!!';
    const _0x56af95 = _0x2cea2b;
    var _0x2a6a1a = localStorage[_0x2673(0x19b)](_0x56af95[_0x2673(0x180)]),
        _0x92d8ae = new Date()[_0x2673(0x22f)]();
    if (_0x2a6a1a && _0x56af95[_0x2673(0x1bc)](_0x56af95['OybHg'](_0x92d8ae, parseInt(_0x2a6a1a)), _0x56af95[_0x2673(0x1c6)](0x18 * 0x3c * 0x3c, 0x3e8))) return;
    var _0x334326 = document[_0x2673(0x1d4) + _0x2673(0x2ac)](_0x2673(0x1ea));
    _0x334326[_0x2673(0x2d0)][_0x2673(0x252)] = _0x56af95[_0x2673(0x292)], _0x334326['style']['top'] = '0', _0x334326[_0x2673(0x2d0)][_0x2673(0x24c)] = '0', _0x334326[_0x2673(0x2d0)][_0x2673(0x23b)] = _0x2673(0x1d3), _0x334326[_0x2673(0x2d0)][_0x2673(0x1e8) + _0x2673(0x1d1)] = _0x56af95[_0x2673(0x1dd)], _0x334326['style'][_0x2673(0x256)] = _0x56af95[_0x2673(0x205)], _0x334326[_0x2673(0x2d0)][_0x2673(0x221)] = _0x56af95['lLkQz'], _0x334326[_0x2673(0x2d0)][_0x2673(0x290)] = _0x56af95[_0x2673(0x21b)], _0x334326[_0x2673(0x2d0)][_0x2673(0x212)] = _0x56af95[_0x2673(0x208)], _0x334326[_0x2673(0x2d0)][_0x2673(0x229)] = _0x56af95[_0x2673(0x231)], _0x334326[_0x2673(0x2d0)][_0x2673(0x259)] = _0x56af95[_0x2673(0x237)], _0x334326[_0x2673(0x2d0)][_0x2673(0x18f)] = _0x56af95[_0x2673(0x296)];
    var _0xb53208 = document['createElem' + _0x2673(0x2ac)](_0x56af95['BaPsG']);
    _0xb53208[_0x2673(0x174)] = _0x56af95[_0x2673(0x183)], _0xb53208[_0x2673(0x2d0)][_0x2673(0x252)] = _0x56af95[_0x2673(0x1db)], _0xb53208[_0x2673(0x2d0)][_0x2673(0x176)] = _0x56af95['WHqJZ'], _0xb53208['style'][_0x2673(0x280)] = _0x56af95[_0x2673(0x1a4)], _0xb53208[_0x2673(0x2d0)]['transform'] = _0x56af95['qTaVa'], _0xb53208[_0x2673(0x2d0)][_0x2673(0x186)] = _0x56af95[_0x2673(0x1b1)], _0xb53208[_0x2673(0x2d0)][_0x2673(0x290)] = _0x56af95[_0x2673(0x208)], _0xb53208[_0x2673(0x2d0)][_0x2673(0x212)] = _0x56af95[_0x2673(0x208)], _0xb53208[_0x2673(0x2a3)] = function() {
        _0x334326[_0x2673(0x2d0)][_0x2673(0x1b8)] = _0x2673(0x2d1), document[_0x2673(0x1da)][_0x2673(0x2d0)][_0x2673(0x201)] = '0', localStorage[_0x2673(0x232)](_0x56af95[_0x2673(0x180)], new Date()[_0x2673(0x22f)]()[_0x2673(0x2a5)]());
    }, _0x334326['innerHTML'] = _0x56af95[_0x2673(0x1d5)], _0x334326[_0x2673(0x203) + 'd'](_0xb53208), document[_0x2673(0x1da)][_0x2673(0x226) + 're'](_0x334326, document['body'][_0x2673(0x17a)]), document[_0x2673(0x1da)][_0x2673(0x2d0)][_0x2673(0x201)] = _0x334326[_0x2673(0x282) + 'ht'] + 'px';
}
var _0x24ebe1 = new MutationObserver(_0x58923c);
_0x24ebe1[_0x2673(0x283)](document[_0x2673(0x25f) + _0x2673(0x192)], _0x5caf02), document[_0x2673(0x1dc) + _0x2673(0x1fd)]('DOMContent' + 'Loaded', () => {
    const _0x2e2601 = {
        'SvXZL': function(_0x459263) {
            return _0x459263();
        }
    };
    _0x2e2601[_0x2673(0x299)](_0x5794be);
});

function _0x4ddc74(_0x9c5aae, _0x378d4f) {
    const _0x512885 = {};
    _0x512885['bMpSk'] = function(_0x27c103, _0x326f26) {
        return _0x27c103 !== _0x326f26;
    };
    const _0x43bc27 = _0x512885;
    if (!(_0x9c5aae instanceof HTMLElement) || !_0x9c5aae[_0x2673(0x2d3) + 'te'](_0x378d4f) || _0x9c5aae[_0x2673(0x29b) + 'nerAdded']) return;
    _0x9c5aae[_0x2673(0x29b) + 'nerAdded'] = !![], _0x9c5aae[_0x2673(0x1dc) + _0x2673(0x1fd)](_0x2673(0x285), function(_0x4b155c) {
        const _0x468621 = _0x9c5aae['getAttribu' + 'te'](_0x378d4f),
            _0x5e929e = _0x52e538(_0x9c5aae[_0x2673(0x209) + 'te'](_0x378d4f));
        _0x43bc27['bMpSk'](_0x5e929e, _0x468621) && _0x9c5aae[_0x2673(0x1c7) + 'te'](_0x378d4f, _0x5e929e);
    });
}

function _0x56a6d2(_0x940e23) {
    const _0x5aa3e0 = {
        'gEiyx': function(_0x48f610, _0x4005e2) {
            return _0x48f610(_0x4005e2);
        },
        'jinJH': function(_0x5e4940, _0x5712b9) {
            return _0x5e4940 instanceof _0x5712b9;
        },
        'iEhzD': 'submit'
    };
    if (!_0x5aa3e0[_0x2673(0x2c7)](_0x940e23, HTMLFormElement) || !_0x940e23['hasAttribu' + 'te'](_0x2673(0x1f3)) || _0x940e23[_0x2673(0x236) + _0x2673(0x1cb)]) return;
    _0x940e23['submitHook' + 'edAlready'] = !![], _0x940e23[_0x2673(0x1dc) + _0x2673(0x1fd)](_0x5aa3e0[_0x2673(0x2a1)], function(_0xf12f10) {
        if (!_0x940e23 || !_0x940e23['parentNode']) {
            console[_0x2673(0x1a9)]('hookFormSu' + 'bmit: Form' + _0x2673(0x26d) + _0x2673(0x1bf) + _0x2673(0x1c3) + ' the DOM, ' + 'skipping a' + _0x2673(0x2bb) + _0x2673(0x219));
            return;
        }
        _0xf12f10[_0x2673(0x1ee) + _0x2673(0x1e9)](), _0xf12f10['target'][_0x2673(0x1f3)] = _0x5aa3e0['gEiyx'](_0x52e538, _0xf12f10[_0x2673(0x1b9)][_0x2673(0x1f3)]), _0xf12f10[_0x2673(0x1b9)]['submit']();
    });
}

function _0x2ebfd6(_0xb6eb05, _0x3cb578, _0x28da71) {
    const _0x1cd9ae = {};
    _0x1cd9ae[_0x2673(0x1f7)] = 'PROXY_URL_' + _0x2673(0x26e);
    const _0x28e3be = _0x1cd9ae;
    if (window[_0x2673(0x27a) + _0x2673(0x22c) + _0x2673(0x22a)] && window[_0x2673(0x27a) + _0x2673(0x22c) + _0x2673(0x22a)][_0x2673(0x19e)]) {
        const _0x511819 = {};
        _0x511819['pathname'] = _0xb6eb05, _0x511819['real_proto' + _0x2673(0x2bd)] = _0x3cb578, _0x511819['real_host'] = _0x28da71;
        const _0x48bb1d = {};
        _0x48bb1d['type'] = _0x28e3be['xusUX'], _0x48bb1d[_0x2673(0x265)] = _0x511819, window['proxy_work' + _0x2673(0x22c) + _0x2673(0x22a)][_0x2673(0x19e)][_0x2673(0x242) + 'e'](_0x48bb1d);
    }
}

function _0x452a7b() {
    const _0x2cff16 = {};
    _0x2cff16[_0x2673(0x1fb)] = function(_0x2310be, _0xf44ff3) {
        return _0x2310be !== _0xf44ff3;
    };
    const _0x2f3b2b = _0x2cff16;
    if (!proxy_real_protocol || _0x2f3b2b[_0x2673(0x1fb)](window[_0x2673(0x25c)], window[_0x2673(0x280)])) return;
    if (window[_0x2673(0x27a) + _0x2673(0x22c) + _0x2673(0x22a)] && window[_0x2673(0x27a) + _0x2673(0x22c) + _0x2673(0x22a)][_0x2673(0x19e)]) {
        const _0x542e60 = {};
        _0x542e60[_0x2673(0x1cf)] = proxy_real_protocol, _0x542e60[_0x2673(0x224)] = proxy_real_host;
        const _0xc1a776 = {};
        _0xc1a776[_0x2673(0x2cd)] = _0x2673(0x199) + _0x2673(0x23c), _0xc1a776[_0x2673(0x265)] = _0x542e60, window[_0x2673(0x27a) + _0x2673(0x22c) + 'ation'][_0x2673(0x19e)][_0x2673(0x242) + 'e'](_0xc1a776);
    }
}
'serviceWor' + 'ker' in navigator && navigator['serviceWor' + 'ker'][_0x2673(0x29d) + _0x2673(0x249)]()['then'](function(_0x57a846) {
    const _0x11f0c7 = {
        'HImhF': function(_0x364dd0) {
            return _0x364dd0();
        },
        'vDARG': 'siteproxy_' + _0x2673(0x261) + _0x2673(0x189) + _0x2673(0x262) + _0x2673(0x1d0),
        'DkfCP': _0x2673(0x289) + _0x2673(0x261) + _0x2673(0x189) + _0x2673(0x253) + 'ccessful w' + 'ith scope:' + ' ',
        'IMEDH': 'host:',
        'DUNOh': function(_0x459245, _0x24a454) {
            return _0x459245 + _0x24a454;
        },
        'MXcWp': function(_0x269329, _0x5262f6) {
            return _0x269329 + _0x5262f6;
        },
        'lmpNc': _0x2673(0x287) + _0x2673(0x19d),
        'EOQKp': _0x2673(0x1e2)
    };
    var _0x50050d = _0x57a846['some'](function(_0x14ba16) {
        let _0x289c6b = _0x14ba16[_0x2673(0x19e)] && _0x14ba16[_0x2673(0x19e)][_0x2673(0x1cd)][_0x2673(0x2cb)](_0x2673(0x289) + _0x2673(0x261) + 'rker.js');
        _0x289c6b && (console[_0x2673(0x22e)](_0x2673(0x22b) + _0x2673(0x277) + 'rker alrea' + 'dy registe' + _0x2673(0x1e7)), window[_0x2673(0x27a) + _0x2673(0x22c) + _0x2673(0x22a)] = _0x14ba16, _0x11f0c7[_0x2673(0x1e4)](_0x452a7b));
    });
    !_0x50050d && window['addEventLi' + _0x2673(0x1fd)](_0x11f0c7[_0x2673(0x294)], function() {
        const _0x3a18cf = {
            'ydglQ': _0x11f0c7[_0x2673(0x26a)],
            'sAeGH': _0x11f0c7[_0x2673(0x260)],
            'OnZsw': function(_0x5d1bfc) {
                return _0x11f0c7[_0x2673(0x1e4)](_0x5d1bfc);
            }
        };
        if (window['proxy_work' + 'er_registr' + _0x2673(0x22a)] && window['proxy_work' + _0x2673(0x22c) + 'ation'][_0x2673(0x19e)]) return;
        navigator[_0x2673(0x293) + _0x2673(0x273)][_0x2673(0x27e)](_0x11f0c7[_0x2673(0x1af)](_0x11f0c7[_0x2673(0x25d)](_0x2673(0x18e) + _0x2673(0x2cc) + _0x2673(0x2a0) + _0x2673(0x1e6) + _0x2673(0x240), proxy_real_protocol), _0x11f0c7[_0x2673(0x20d)]) + proxy_real_host)[_0x2673(0x1bd)](function(_0xa73694) {
            console[_0x2673(0x22e)](_0x3a18cf[_0x2673(0x1e5)], _0xa73694['scope'], _0x2673(0x239), proxy_real_protocol, _0x3a18cf[_0x2673(0x28c)], proxy_real_host), window['proxy_work' + _0x2673(0x22c) + _0x2673(0x22a)] = _0xa73694, _0x3a18cf[_0x2673(0x255)](_0x452a7b);
        }, function(_0x177be7) {
            console[_0x2673(0x22e)](_0x11f0c7[_0x2673(0x28b)], _0x177be7);
        });
    });
});
window[_0x2673(0x1fe)][_0x2673(0x25a)][_0x2673(0x2cb)](_0x2673(0x297)) && setTimeout(() => {
    const _0x25dbc9 = {
        'EBUFr': _0x2673(0x187) + _0x2673(0x2ca) + _0x2673(0x28e),
        'nApaI': _0x2673(0x28a),
        'bxRfX': function(_0x79b710, _0x444e75, _0x1a0784) {
            return _0x79b710(_0x444e75, _0x1a0784);
        },
        'uJXAP': 'form',
        'clPIT': _0x2673(0x185)
    };
    document[_0x2673(0x17c) + _0x2673(0x217)](_0x25dbc9[_0x2673(0x1ac)])[_0x2673(0x1dc) + _0x2673(0x1fd)](_0x25dbc9[_0x2673(0x1f9)], function(_0x56d0a0) {
        _0x56d0a0[_0x2673(0x1ee) + 'ault']();
        const _0x174bca = _0x56d0a0[_0x2673(0x1b9)][_0x2673(0x1f3)],
            _0x121733 = _0x56d0a0['target'][_0x2673(0x2c5)] || _0x25dbc9['nApaI'],
            _0x2784f0 = new FormData(_0x56d0a0[_0x2673(0x1b9)]);
        let _0x34863c = {};
        const _0x3f7abb = {};
        _0x3f7abb['method'] = _0x121733, _0x3f7abb['body'] = _0x2784f0, _0x3f7abb['headers'] = _0x34863c, _0x25dbc9[_0x2673(0x2af)](fetch, _0x174bca, _0x3f7abb)[_0x2673(0x1bd)](_0x33a30f => {
            window[_0x2673(0x1fe)]['href'] = _0x33a30f[_0x2673(0x220)];
        })[_0x2673(0x2cf)](_0x3e72fc => {
            console[_0x2673(0x1a9)](_0x25dbc9[_0x2673(0x202)], _0x3e72fc);
        });
    });
}, 0xfa0);
" + "
}</script>`;
    a0_0x2e9a94(_0xb05688, _0x127fae, _0xcd68e3, _0x4242b1, _0xa698d6);
    let _0x9326b1 = await a0_0x24984e(_0xb05688, _0x127fae, _0x2d03c4, _0x1b7027);
    if (_0xb05688.status === 0xcc || [0x12d, 0x12e, 0x12f, 0x130, 0x133, 0x134].includes(_0xb05688.status)) {
        _0x9326b1 = undefined;
        _0x127fae['delete']("content-length");
        _0x127fae["delete"]("content-encoding");
        _0x127fae["delete"]("transfer-encoding");
    }
    let _0x313afd = new Response(_0x9326b1, {
        'status': _0xb05688.status,
        'headers': _0x127fae
    });
    return _0x313afd;
}
function a0_0x2e9a94(_0x2a4f09, _0x3ef523, _0x552044, _0x26c122, _0x50f06f) {
    if ([0x12d, 0x12e, 0x12f, 0x133, 0x134].includes(_0x2a4f09.status)) {
        let _0x105e7e = _0x2a4f09.headers.get('location');
        if (_0x105e7e) {
            _0x3ef523.set('Location', a0_0x537262({
                'location_value': _0x105e7e,
                'proxy_url_prefix': _0x552044,
                'proxy_real_protocol': _0x26c122,
                'proxy_real_host': _0x50f06f
            }));
        }
    }
}
async function a0_0x24984e(_0x34b9cd, _0x18bbb4, _0x580b61, _0xcbc641) {
    const _0x3e2643 = getProxyConfig;
    const _0x1b9dc7 = _0x3e2643.proxy_url + _0x3e2643.token_prefix;
    const _0x2ea524 = _0xcbc641.proxy_real_host;
    let _0xcf5a0b;
    const _0x46a328 = _0x34b9cd.headers.get("content-encoding");
    const _0x21285c = _0x34b9cd.headers.get("content-type") || '';
    const _0x36e9b0 = _0x21285c.includes("text/html");
    let _0x32d3b7 = _0x21285c.includes("javascript");
    let _0x165cc2 = _0x34b9cd.body;
    let _0x23c861 = 'utf-8';
    let _0x1ebf11;
    if (_0x46a328) {
        _0xcf5a0b = await _0x34b9cd.arrayBuffer();
        _0x1ebf11 = _0xcf5a0b.byteLength;
    }
    if ((_0x36e9b0 || _0x32d3b7) && _0x34b9cd.status < 0x1f4) {
        if (!_0x46a328) {
            _0xcf5a0b = await _0x34b9cd.arrayBuffer();
            _0x1ebf11 = _0xcf5a0b.byteLength;
        }
        if (!_0x1ebf11 || _0x1ebf11 < 0xa) {
            if (!_0x1ebf11 || _0x34b9cd.status === 0xcc) {
                _0xcf5a0b = undefined;
            }
            return _0xcf5a0b;
        }
        if (_0x46a328) { }
        const _0x495d03 = new TextDecoder('utf-8');
        let _0x54ff19 = _0x495d03.decode(_0xcf5a0b);
        const _0x45db29 = _0x54ff19.match(/<meta\s+[^>]*charset\s*=\s*["']?([0-9a-zA-Z\-]+)["']?[^>]*>/i);
        let _0x30c28c = -0x1;
        if (_0x36e9b0 && _0x45db29 && _0x45db29[0x1]) {
            _0x23c861 = _0x45db29[0x1].toLowerCase();
            if (_0x23c861 === "gbk") {
                _0x30c28c = a0_0x28439b(_0x54ff19, "<head.*?>");
                if (_0x30c28c !== -0x1) {
                    _0x30c28c += 0x1;
                }
            }
        }
        let _0x5809e9;
        if (_0x36e9b0 && _0x23c861 === "gbk") {
            if (_0x30c28c !== -0x1) {
                const _0xd1c5a9 = new TextEncoder();
                let _0x4f3718 = _0xd1c5a9.encode(_0x580b61);
                let _0x120dc1 = _0xcf5a0b.byteLength + _0x4f3718.byteLength;
                let _0x31c869 = new ArrayBuffer(_0x120dc1);
                let _0x58f47f = new Uint8Array(_0x31c869);
                let _0x4228de = new Uint8Array(_0xcf5a0b);
                let _0x2a356e = new Uint8Array(_0x4f3718);
                _0x58f47f.set(_0x4228de.subarray(0x0, _0x30c28c), 0x0);
                _0x58f47f.set(_0x2a356e, _0x30c28c);
                _0x58f47f.set(_0x4228de.subarray(_0x30c28c), _0x30c28c + _0x2a356e.length);
                _0xcf5a0b = _0x31c869;
                _0x5809e9 = _0x495d03.decode(_0xcf5a0b);
            }
        } else {
            if (a0_0x2fdbcb(_0x2ea524)) { } else {
                if (_0x36e9b0 || _0x32d3b7) {
                    _0xcf5a0b = _0x54ff19;
                    _0xcf5a0b = a0_0xa5b61({
                        'body': _0xcf5a0b,
                        'proxy_real_host': _0x2ea524,
                        'proxy_url_prefix': _0x1b9dc7
                    });
                    if (_0x36e9b0) {
                        if (_0xcf5a0b.indexOf("<head") !== -0x1) {
                            _0xcf5a0b = _0xcf5a0b.replace(/<head(.*?)>/, "<head$1>" + _0x580b61);
                        } else {
                            if (_0xcf5a0b.indexOf('<body') !== -0x1) {
                                _0xcf5a0b = _0xcf5a0b.replace(/<body(.*?)>/, "<body$1>" + _0x580b61);
                            } else if (_0xcf5a0b.indexOf("<html") !== -0x1) {
                                _0xcf5a0b = _0xcf5a0b.replace(/<html(.*?)>/, '<html$1>' + _0x580b61);
                            } else {
                                _0xcf5a0b = _0xcf5a0b.replace(/(<\/[a-zA-Z0-9]+>)/, '$1' + _0x580b61);
                            }
                        }
                    }
                    const _0x131094 = new TextEncoder('utf-8');
                    _0xcf5a0b = _0x131094.encode(_0xcf5a0b);
                }
            }
        }
        if (_0xcbc641.proxy_real_protocol) {
            const _0x114877 = "proxy_real_protocol=" + _0xcbc641.proxy_real_protocol + "; Path=/; HttpOnly";
            const _0x5c3a9e = "proxy_real_host=" + _0xcbc641.proxy_real_host + "; Path=/; HttpOnly";
            _0x18bbb4.append('set-cookie', _0x114877);
            _0x18bbb4.append("set-cookie", _0x5c3a9e);
            _0x18bbb4["delete"]("x-frame-options");
        }
        _0x165cc2 = _0xcf5a0b;
    }
    if (_0x46a328) {
        if (typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node) {
            _0xcf5a0b = await a0_0x2fb429(_0xcf5a0b, "gzip");
            _0x18bbb4.set("content-length", String(_0xcf5a0b.length));
            _0x18bbb4.set("content-encoding", "gzip");
        }
        _0x165cc2 = _0xcf5a0b;
        _0x18bbb4["delete"]("transfer-encoding");
    }
    return _0x165cc2;
}
function a0_0x4a2798(_0xb6b43) {
    const _0x3412dc = /^([^:/?#]+)\/([-a-z0-9A-Z.]+)/;
    const _0x406ad0 = _0xb6b43.match(_0x3412dc);
    let _0x35a597;
    let _0x9ea15;
    if (_0x406ad0) {
        _0x35a597 = _0x406ad0[0x1];
        _0x9ea15 = _0x406ad0[0x2];
    }
    const _0x63f3c8 = {
        protocol: _0x35a597,
        "host": _0x9ea15
    };
    return _0x63f3c8;
}
function a0_0x5e3a47() {
    return typeof process !== "undefined" && process.versions && process.versions.node;
}
var a0_0x533a20;
var a0_0x5ed50c = typeof process !== "undefined" && process.versions && process.versions.node;
if (a0_0x5ed50c) {
    import("crypto").then(_0xe9099d => a0_0x533a20 = _0xe9099d);
    import("node-fetch").then(_0x309081 => {
        global.node_fetch = _0x309081["default"];
    });
}
async function a0_0x274689(_0xf0ef18) {
    if (a0_0x5ed50c) {
        const _0x48eb9 = Buffer.from(_0xf0ef18, "base64");
        const _0x2be45d = a0_0x533a20.privateDecrypt({
            'key': "\n-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAQk/iBU0Ev8Yf\nAw/qjgJJaxB5PbYotgOAmqVVetQrDvyI8j+39ruSibbfkLr+wcSELjSgsuN1zMgg\n0sazSAuJzAOdc2E4S7dF+kkWDhI6iaMgSlc9ggLil1OL/Z1EcWpbBT27cVRTFfbr\nVV8NptQP1pvmSDKGow1PAg3zpN2xlQbovP0r8G/of7nnCQT7mlOP/DQiKBkJLVSb\nBRYsXzWZdDh/DenzqrMatFsH6uLiAQdRMiiX408kHbZI35Dg8P3Ut85b8/lfSaDt\nK4clMGgQuEYrCpWdaWnPhXXnwEtqR2Z52jrfNL4uybEvY6CMV5ylyUiBvWPJfmJz\nzgRSMe+LAgMBAAECggEAM6W8uu2MnqF78hnK/Uov4BQ0ZTWISVB4CWTB1IA+HeEV\nQx68sklEY12+dDl3mndoONAG0EKuKxebjYHB4iiQ/PAC6pmzvMFOVyyg1J1sFTCj\nU0nVPM8/wio/xeQYCupi1VfHmSKdMgK9BcQ12D+ASU7wK4EqnZOQwDA/mjuoWItG                                                                                                                       \nS86g4wezKnBPpj9IxkBAurSEeFKVjupAoASk4e1v/S+ITPRFlic3I0uy8b2qU7il\ngfbtB7j3UPYFFlhH/sipizQ1d1N+EyIaXplWX4QnoO1/ksVsqJZ0Q6afzYR+mtlb\nR7zqoBrwLrMOdREuyrQfPgqS1OgEEhimaGUvcbbF3QKBgQDtU3uC+adNrqmXi9EF\nIjieZGa5T2QlqkzL6wf/NXfiSBjw+nqJSuRXeRhS+tLIpfLWAkhwLp4YtBioom6U\ny/3KP5GtDbRJ9lZSF06moueTidk4Z4bfN7+WFT7UbEf/Nx3fnMFHEFqmsvH2KHjn\n1ADmAAHW0ERRwEf5ocWJwAUvBwKBgQDPYwhWBC61w2TQy6ZogcAfQudociejOngq\nfMz7iDEV35aR8/cc81uo5spN7amRmkJVPpd92HUd+xdlXsOLBJ5HHsoeuWEo6Xe5\nhsHaZYeJJx/1BLkmv050QfzjIeh6n71gfSOewCooNgkb9lLbvHoT50CQgXfkme2A            \nUz4HLQDWXQKBgB2odyDxDgVZNHxpzp8znZu9tFCoKT3DwIEjSAaOqgKvO96xjqql\nn0+HJJEKI1lL08MG2gKa8MrphsNcOTGDJJ4nv46+za8Ih9UOcJfGd+YqLeksluBC\nWUDqOsXVGlI8kxEkx8qXspxudGpsuF9QUSRtD83GjSMiQlxh6QvD4WH1AoGBAIgC\nlgP7qDqy09qPxSpC9iJKeYOpYk+N2CNdR/4q2q5SvegozUciX1nNSp6DILOKLLjF\nXQs+u8iW1Ug5NxtkQv23tq0hvRPc0hVNyLMX5STREQdbOqarzqM2Z8j6gwJw4v11   \n9Ld3pe5LSfwZt0u/N3z4LALZtiypuvZvIX4JSMRNAoGBAOc0nw0OdDOEOmfh2hqR  \nwRTW+oTY2iIDKFHtzKVSxJlyKQkagJgg/qboXL9bQoHTsBzL8lGZhh8JJPpeyP1/\nyIzsiCZ9hrt+z9KJPG3lu0tlnEOg7r57SiR8aOtsb1D9wb24cQLFQOfT3D66mNi8\n1/PLJ86KgP+cXZDrVrjUUKY0\n-----END PRIVATE KEY-----\n",
            'padding': a0_0x533a20.constants.RSA_PKCS1_OAEP_PADDING,
            'oaepHash': "sha256"
        }, _0x48eb9);
        return _0x2be45d.toString("utf8");
    } else {
        const _0x4e71b2 = "\n-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAQk/iBU0Ev8Yf\nAw/qjgJJaxB5PbYotgOAmqVVetQrDvyI8j+39ruSibbfkLr+wcSELjSgsuN1zMgg\n0sazSAuJzAOdc2E4S7dF+kkWDhI6iaMgSlc9ggLil1OL/Z1EcWpbBT27cVRTFfbr\nVV8NptQP1pvmSDKGow1PAg3zpN2xlQbovP0r8G/of7nnCQT7mlOP/DQiKBkJLVSb\nBRYsXzWZdDh/DenzqrMatFsH6uLiAQdRMiiX408kHbZI35Dg8P3Ut85b8/lfSaDt\nK4clMGgQuEYrCpWdaWnPhXXnwEtqR2Z52jrfNL4uybEvY6CMV5ylyUiBvWPJfmJz\nzgRSMe+LAgMBAAECggEAM6W8uu2MnqF78hnK/Uov4BQ0ZTWISVB4CWTB1IA+HeEV\nQx68sklEY12+dDl3mndoONAG0EKuKxebjYHB4iiQ/PAC6pmzvMFOVyyg1J1sFTCj\nU0nVPM8/wio/xeQYCupi1VfHmSKdMgK9BcQ12D+ASU7wK4EqnZOQwDA/mjuoWItG                                                                                                                       \nS86g4wezKnBPpj9IxkBAurSEeFKVjupAoASk4e1v/S+ITPRFlic3I0uy8b2qU7il\ngfbtB7j3UPYFFlhH/sipizQ1d1N+EyIaXplWX4QnoO1/ksVsqJZ0Q6afzYR+mtlb\nR7zqoBrwLrMOdREuyrQfPgqS1OgEEhimaGUvcbbF3QKBgQDtU3uC+adNrqmXi9EF\nIjieZGa5T2QlqkzL6wf/NXfiSBjw+nqJSuRXeRhS+tLIpfLWAkhwLp4YtBioom6U\ny/3KP5GtDbRJ9lZSF06moueTidk4Z4bfN7+WFT7UbEf/Nx3fnMFHEFqmsvH2KHjn\n1ADmAAHW0ERRwEf5ocWJwAUvBwKBgQDPYwhWBC61w2TQy6ZogcAfQudociejOngq\nfMz7iDEV35aR8/cc81uo5spN7amRmkJVPpd92HUd+xdlXsOLBJ5HHsoeuWEo6Xe5\nhsHaZYeJJx/1BLkmv050QfzjIeh6n71gfSOewCooNgkb9lLbvHoT50CQgXfkme2A            \nUz4HLQDWXQKBgB2odyDxDgVZNHxpzp8znZu9tFCoKT3DwIEjSAaOqgKvO96xjqql\nn0+HJJEKI1lL08MG2gKa8MrphsNcOTGDJJ4nv46+za8Ih9UOcJfGd+YqLeksluBC\nWUDqOsXVGlI8kxEkx8qXspxudGpsuF9QUSRtD83GjSMiQlxh6QvD4WH1AoGBAIgC\nlgP7qDqy09qPxSpC9iJKeYOpYk+N2CNdR/4q2q5SvegozUciX1nNSp6DILOKLLjF\nXQs+u8iW1Ug5NxtkQv23tq0hvRPc0hVNyLMX5STREQdbOqarzqM2Z8j6gwJw4v11   \n9Ld3pe5LSfwZt0u/N3z4LALZtiypuvZvIX4JSMRNAoGBAOc0nw0OdDOEOmfh2hqR  \nwRTW+oTY2iIDKFHtzKVSxJlyKQkagJgg/qboXL9bQoHTsBzL8lGZhh8JJPpeyP1/\nyIzsiCZ9hrt+z9KJPG3lu0tlnEOg7r57SiR8aOtsb1D9wb24cQLFQOfT3D66mNi8\n1/PLJ86KgP+cXZDrVrjUUKY0\n-----END PRIVATE KEY-----\n".replace("-----BEGIN PRIVATE KEY-----", '').replace("-----END PRIVATE KEY-----", '').replace(/\s/g, '');
        const _0x449673 = atob(_0x4e71b2);
        const _0x599aba = new Uint8Array(_0x449673.length);
        for (let _0x18efba = 0x0; _0x18efba < _0x449673.length; _0x18efba++) {
            _0x599aba[_0x18efba] = _0x449673.charCodeAt(_0x18efba);
        }
        const _0x2b28a6 = await crypto.subtle.importKey("pkcs8", _0x599aba.buffer, {
            'name': "RSA-OAEP",
            'hash': {
                'name': "SHA-256"
            }
        }, false, ["decrypt"]);
        const _0x57bf02 = Uint8Array.from(atob(_0xf0ef18), _0x3bba2b => _0x3bba2b.charCodeAt(0x0));
        const _0x265f6f = {
            name: "RSA-OAEP"
        };
        const _0x459e4d = await crypto.subtle.decrypt(_0x265f6f, _0x2b28a6, _0x57bf02);
        return new TextDecoder().decode(_0x459e4d);
    }
}
async function a0_0x214a94(_0x1e281b, _0x85aedb) {
    let _0xc037ee;
    let _0x248875;
    let _0x103508;
    let _0x1922d6;
    if (a0_0x5ed50c) {
        _0xc037ee = Buffer.from(_0x1e281b, "base64");
        _0x248875 = _0xc037ee.subarray(0x0, 0x10);
        _0x103508 = _0xc037ee.subarray(0x10);
        _0x1922d6 = Buffer.from(_0x85aedb, "base64");
    } else {
        const _0x1930c0 = Uint8Array.from(atob(_0x1e281b), _0x55fff0 => _0x55fff0.charCodeAt(0x0));
        _0x248875 = _0x1930c0.slice(0x0, 0x10);
        _0x103508 = _0x1930c0.slice(0x10);
        const _0x2a0ffe = Uint8Array.from(atob(_0x85aedb), _0x33fd2d => _0x33fd2d.charCodeAt(0x0));
        _0x1922d6 = _0x2a0ffe;
    }
    if (a0_0x5ed50c) {
        const _0x4de02f = a0_0x533a20.createDecipheriv("aes-256-cbc", _0x1922d6, _0x248875);
        let _0x2657e2 = _0x4de02f.update(_0x103508);
        _0x2657e2 = Buffer.concat([_0x2657e2, _0x4de02f.final()]);
        return _0x2657e2.toString('utf8');
    } else {
        const _0x2e189e = await crypto.subtle.importKey("raw", _0x1922d6, {
            'name': "AES-CBC"
        }, false, ['decrypt']);
        const _0x55bd6a = {
            name: "AES-CBC",
            iv: _0x248875
        };
        const _0x222b72 = await crypto.subtle.decrypt(_0x55bd6a, _0x2e189e, _0x103508);
        return new TextDecoder().decode(_0x222b72);
    }
}
function a0_0x4990b4() {
    return typeof process !== "undefined" && process.versions && process.versions.node;
}
function a0_0x21efd2(_0x386d) {
    let _0x1b8a4c = _0x386d.indexOf(';');
    if (_0x1b8a4c !== -0x1) {
        let _0x29acca = _0x386d.substring(0x0, _0x1b8a4c);
        if (_0x29acca.indexOf('=') === -0x1) {
            return true;
        }
    }
    return false;
}
function a0_0x52a12b(_0x346137, _0x5e2088) {
    const _0x12df6c = _0x1f7d95 => {
        const _0x5cc0cc = new Date(_0x1f7d95);
        const _0x22e16c = new Date();
        return _0x5cc0cc < _0x22e16c;
    };
    let _0xf289fd = _0x346137.replace(/Domain=[^;]*?(;|$)/ig, "Domain=" + _0x5e2088 + ';').replace(/Path=([^;]*?)(;|$)/ig, "Path=/;");
    const _0xc7e5c5 = _0x346137.match(/Expires=([^;]*?)(;|$)/i);
    let _0x3d6042 = false;
    if (_0xc7e5c5 && _0x12df6c(_0xc7e5c5[0x1])) {
        _0x3d6042 = true;
    } else {
        _0xf289fd = _0xf289fd.replace(/Expires=[^;]*?(;|$)/ig, '');
    }
    _0xf289fd = _0xf289fd.replace(/Max-Age=[^;]*?(;|$)/ig, '');
    if (!_0x3d6042) {
        if (!/Secure/i.test(_0xf289fd)) {
            _0xf289fd += "; Secure";
        }
        if (!/HttpOnly/i.test(_0xf289fd)) {
            _0xf289fd += "; HttpOnly";
        }
    }
    if (!/Path=/i.test(_0xf289fd)) {
        _0xf289fd += "; Path=/;";
    }
    _0xf289fd = _0xf289fd.replace(/; ;|;;/g, ';');
    return _0xf289fd;
}
function a0_0x317d69(_0x366762) {
    const _0x3b577d = getProxyConfig;
    const _0x36144e = _0x3b577d.token_prefix;
    const _0x66368 = _0x3b577d.proxy_url + _0x36144e + "https/";
    const _0x5695d9 = _0x3b577d.proxy_url + _0x36144e + "http/";
    let _0x50b744 = _0x366762;
    let _0xa327dd = _0x366762.indexOf(_0x66368);
    if (_0xa327dd !== -0x1) {
        let _0xd13e2d = _0xa327dd + _0x66368.length;
        let _0x5ea1fb = _0x366762.substring(_0xd13e2d);
        _0x50b744 = _0x366762.substring(0x0, _0xa327dd) + "https://" + _0x5ea1fb;
    }
    let _0x2f7a4f = _0x366762.indexOf(_0x5695d9);
    if (_0x2f7a4f !== -0x1 && _0xa327dd === -0x1) {
        let _0x176484 = _0x2f7a4f + _0x5695d9.length;
        let _0x111363 = _0x366762.substring(_0x176484);
        _0x50b744 = _0x366762.substring(0x0, _0x2f7a4f) + "http://" + _0x111363;
    }
    return _0x50b744;
}
function a0_0xd10392(_0x596623) {
    if (!(_0x596623 instanceof Headers)) {
        console.error("newHeaders must be an instance of Headers.");
        return;
    }
    const _0x40a6d8 = [];
    _0x596623.forEach((_0x254716, _0x58c8ab) => {
        if (_0x58c8ab.startsWith("siteproxy")) {
            _0x40a6d8.push(_0x58c8ab);
        }
    });
    _0x40a6d8.forEach(_0x227898 => {
        _0x596623["delete"](_0x227898);
    });
}
var a0_0x1e64f3 = async (_0x50fa72, _0x2f5cf2) => {
    const _0x29afee = getProxyConfig;
    let {
        req: _0x40db73,
        res: _0x3051a0
    } = _0x50fa72;
    const _0x4a11de = _0x29afee.token_prefix;
    let _0x2b5849 = _0x29afee.proxy_url.substring(_0x29afee.proxy_url.indexOf('//') + 0x2);
    if (_0x2b5849.indexOf(':') !== -0x1) {
        _0x2b5849 = _0x2b5849.substring(0x0, _0x2b5849.indexOf(':'));
    }
    if (a0_0x40ef07(_0x40db73.url)) {
        return _0x2f5cf2();
    }
    let _0x584af3 = new URL(_0x40db73.url);
    if (!_0x584af3.pathname.startsWith(_0x4a11de)) {
        return _0x2f5cf2();
    }
    let _0x339c62 = _0x584af3.pathname.substring(_0x4a11de.length);
    let _0x222a4c = '';
    let {
        protocol: _0x26e56c,
        host: _0x8df240
    } = a0_0x4a2798(_0x339c62);
    if (_0x26e56c !== "http" && _0x26e56c !== "https") { }
    if (_0x26e56c !== "http" && _0x26e56c !== "https") {
        return _0x2f5cf2();
    }
    _0x222a4c = _0x26e56c + "://" + _0x8df240;
    _0x40db73.proxy_real_protocol = _0x26e56c;
    _0x40db73.proxy_real_host = _0x8df240;
    const _0x3919b3 = _0x12745c => {
        let _0x1f0464 = _0x12745c.replace(new RegExp('^' + _0x4a11de + _0x26e56c + '/[^/]+'), '');
        _0x1f0464 = a0_0x317d69(_0x1f0464);
        return _0x1f0464;
    };
    const _0x2f9762 = async (_0x52b709, _0x707d40, _0x55f30d) => {
        const _0x356afa = getProxyConfig;
        const _0xa1ccb1 = _0x356afa.proxy_url + _0x356afa.token_prefix;
        let _0x33a653 = {};
        _0x52b709.forEach((_0x4b21e3, _0x13e465) => {
            _0x33a653[_0x13e465] = _0x4b21e3;
        });
        if (_0x33a653['siteproxy-newreferer']) {
            _0x33a653.referer = _0x33a653["siteproxy-newreferer"];
            const _0x246e39 = new URL(_0x33a653["siteproxy-newreferer"]);
            _0x33a653.origin = _0x246e39.origin;
        } else {
            if (_0x33a653.referer && _0x33a653.referer.startsWith(_0xa1ccb1)) {
                _0x33a653.referer = _0x33a653.referer.substring(_0xa1ccb1.length);
                if (_0x33a653.referer.startsWith("https/")) {
                    _0x33a653.referer = "https://" + _0x33a653.referer.substring(0x6);
                } else {
                    if (_0x33a653.referer.startsWith("http/")) {
                        _0x33a653.referer = "http://" + _0x33a653.referer.substring(0x5);
                    }
                }
                _0x33a653.origin = _0x707d40 + "://" + _0x55f30d;
            } else {
                if (_0x33a653.origin === _0x356afa.proxy_url) {
                    _0x33a653.origin = _0x707d40 + "://" + _0x55f30d;
                }
            }
        }
        return _0x33a653;
    };
    const _0x24d3e1 = _0x4773e6 => {
        let _0x4eaa48 = new Headers();
        let _0x15cfb5 = [];
        _0x4773e6.forEach((_0xbf36b8, _0x11db56) => {
            if (_0x11db56.toLowerCase() !== "set-cookie") {
                _0x4eaa48.set(_0x11db56, _0xbf36b8);
            } else {
                _0x15cfb5.push(_0xbf36b8);
            }
        });
        _0x15cfb5.forEach(_0x1f5b9b => {
            _0x1f5b9b.split(/,(?!(?:\s+[0-9]{2}))/).forEach(_0x38114c => {
                if (a0_0x21efd2(_0x38114c)) {
                    return;
                }
                let _0x129b80 = a0_0x52a12b(_0x38114c, _0x2b5849);
                _0x4eaa48.append("Set-Cookie", _0x129b80);
            });
        });
        return _0x4eaa48;
    };
    const _0x2d7395 = _0x222a4c + _0x3919b3(_0x584af3.pathname) + _0x584af3.search;
    let _0x3bf85e = await _0x2f9762(_0x50fa72.req.raw.headers, _0x26e56c, _0x8df240);
    let _0x5c20df;
    if (_0x3bf85e['siteproxy-encrypt-aes-base64key']) {
        _0x5c20df = await a0_0x274689(_0x3bf85e['siteproxy-encrypt-aes-base64key']);
    }
    if (_0x3bf85e["siteproxy-encrypt-aes-authorization"]) {
        let _0x5b07d7 = _0x3bf85e["siteproxy-encrypt-aes-authorization"];
        const _0x59af3b = await a0_0x214a94(_0x5b07d7, _0x5c20df);
        _0x3bf85e.authorization = _0x59af3b;
    }
    let _0x45b760 = _0x3bf85e;
    _0x3bf85e = new Headers();
    for (const _0x278c9c in _0x45b760) {
        if (_0x45b760.hasOwnProperty(_0x278c9c)) {
            _0x3bf85e.append(_0x278c9c, _0x45b760[_0x278c9c]);
        }
    }
    let _0x42c20e = _0x50fa72.req.method !== "GET" ? await _0x50fa72.req.arrayBuffer() : undefined;
    const _0x495f6a = _0x3bf85e.get("content-type");
    if (_0x42c20e && _0x42c20e.byteLength === 0x0) {
        _0x42c20e = undefined;
    } else if (_0x495f6a && _0x3bf85e.get("siteproxy-encrypted-body")) {
        if (!(typeof _0x42c20e === 'string' || _0x42c20e instanceof String)) {
            _0x42c20e = new TextDecoder().decode(_0x42c20e);
        }
        _0x42c20e = await a0_0x214a94(_0x42c20e, _0x5c20df);
        _0x3bf85e.set('content-length', _0x42c20e.length);
    }
    a0_0xd10392(_0x3bf85e);
    _0x3bf85e["delete"]('x-forwarded-for');
    _0x3bf85e.set("host", _0x8df240);
    let _0xdfdddc;
    let _0x3dd71e = fetch;
    if (typeof process !== "undefined" && process.versions && process.versions.node) {
        _0x3dd71e = global.node_fetch;
    }
    try {
        _0xdfdddc = await _0x3dd71e(_0x2d7395, {
            'method': _0x50fa72.req.method,
            'headers': _0x3bf85e,
            'body': _0x42c20e,
            'redirect': "manual"
        });
    } catch (_0x12131e) {
        console.log("An error occurred during fetch operation:");
        console.log("Error:", _0x12131e.message);
        console.log("Proxy URL:", _0x2d7395);
        console.log("Method:", _0x50fa72.req.method);
        throw _0x12131e;
    }
    for (const [_0x54ac03, _0x4bf0da] of _0x3bf85e.entries()) { }
    let _0x5cd5d2;
    _0x5cd5d2 = _0x24d3e1(_0xdfdddc.headers);
    _0x50fa72.res = await a0_0x331cce({
        'proxyResponse': _0xdfdddc,
        'newResHeaders': _0x5cd5d2,
        'req': _0x40db73
    });
    return _0x50fa72.res;
};
var handleRequest = async (event, defaultResponse) => {
    const config = getProxyConfig;
    const proxyUrlPrefix = config.proxy_url + config.token_prefix;
    const requestUrl = new URL(event.req.url);

    if (requestUrl.pathname === "/siteproxy_service_worker.js") {
        const searchParams = requestUrl.searchParams;
        const realProtocol = searchParams.get('proxy_real_protocol');
        const realHost = searchParams.get("proxy_real_host");
        if (!realHost) {
            return defaultResponse();
        }

        const configScript = `
      const proxy_url_prefix = '${proxyUrlPrefix}';
      const proxy_real_protocol = '${realProtocol}';
      const proxy_real_host = '${realHost}';
      const config_proxy_url = '${config.proxy_url}';
      const config_token_prefix = '${config.token_prefix}';
    `;

        const workerScript = configScript + `
function stringToArrayBuffer(str) {
  const buffer = new ArrayBuffer(str.length);
  const bufferView = new Uint8Array(buffer);
  let i = 0;
  for (let length = str.length; i < length; i++) {
    bufferView[i] = str.charCodeAt(i);
  }
  return buffer;
}

function arrayBufferToHex(buffer) {
  const bytes = new Uint8Array(buffer);
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, '0').toUpperCase();
    if (i % 16 === 15 || i === bytes.length - 1) {
      hex = ''; // 注意：这里每次16字节或最后一次重置 hex，可能是逻辑错误
    } else {
      hex += ' ';
    }
  }
}

async function importPublicKey(pem) {
  let der = pem.replace("-----BEGIN PUBLIC KEY-----", '').replace("-----END PUBLIC KEY-----", '');
  const binaryDer = atob(der.trim());
  const buffer = stringToArrayBuffer(binaryDer);
  return await self.crypto.subtle.importKey('spki', buffer, {
    name: "RSA-OAEP",
    hash: "SHA-256"
  }, true, ["encrypt"]);
}

async function encryptWithPublicKey(data) {
  const publicKey = await importPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwEJP4gVNBL/GHwMP6o4CSWsQeT22KLYDgJqlVXrUKw78iPI/t/a7kom235C6/sHEhC40oLLjdczIINLGs0gLicwDnXNhOEu3RfpJFg4SOomjIEpXPYIC4pdTi/2dRHFqWwU9u3FUUxX261VfDabUD9ab5kgyhqMNTwIN86TdsZUG6Lz9K/Bv6H+55wkE+5pTj/w0IigZCS1UmwUWLF81mXQ4fw3p86qzGrRbB+ri4gEHUTIol+NPJB22SN+Q4PD91LfOW/P5X0mg7SuHJTBoELhGKwqVnWlpz4V158BLakdmedo63zS+LsmxL2OgjFecpclIgb1jyX5ic84EUjHviwIDAQAB-----END PUBLIC KEY-----");
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  const algorithm = { name: 'RSA-OAEP' };
  const encrypted = await self.crypto.subtle.encrypt(algorithm, publicKey, encodedData);
  const encryptedUint8 = new Uint8Array(encrypted);
  return uint8ArrayToBase64(encryptedUint8);
}

function uint8ArrayToBase64(uint8Array) {
  const binaryString = String.fromCharCode.apply(null, uint8Array);
  return btoa(binaryString);
}

async function generateAesKey() {
  const algorithm = { name: "AES-CBC", length: 256 };
  const key = await self.crypto.subtle.generateKey(algorithm, true, ['encrypt', "decrypt"]);
  const rawKey = await self.crypto.subtle.exportKey('raw', key);
  const base64Key = uint8ArrayToBase64(new Uint8Array(rawKey));
  return { key, base64Key };
}

async function encryptWithAes(data, key) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  const iv = self.crypto.getRandomValues(new Uint8Array(16));
  const algorithm = { name: 'AES-CBC', iv };
  const encrypted = await self.crypto.subtle.encrypt(algorithm, key, encodedData);
  const encryptedBuffer = new Uint8Array(iv.length + encrypted.byteLength);
  encryptedBuffer.set(iv);
  encryptedBuffer.set(new Uint8Array(encrypted), iv.length);
  return uint8ArrayToBase64(encryptedBuffer);
}

var pathMap = {};
function cleanupPathMap() {
  const now = Date.now();
  for (let path in pathMap) {
    if (now > pathMap[path].lasttime + 30000) {
      delete pathMap[path];
    }
  }
}
setInterval(cleanupPathMap, 2000);

let rewriteUrl = url => {
  url = url.replace(new RegExp(proxy_url_prefix + "(http[s]?)/([^/]+)", 'g'), "$1://$2");
  url = url.replace(/___location/g, 'location');
  url = url.replace(/___URL/g, "URL");
  url = url.replace(/___domain/g, "domain");
  return url;
};

self.addEventListener("message", messageEvent => {
  if (messageEvent.data.type === "PROXY_CUR_LOCATION") {
    if (messageEvent.data.data.protocol !== "undefined" && 
        messageEvent.data.data.host !== "undefined" && 
        (messageEvent.data.data.protocol !== self.proxy_target_protocol || 
         messageEvent.data.data.host !== self.proxy_target_host)) {
      self.proxy_target_protocol = messageEvent.data.data.protocol;
      self.proxy_target_host = messageEvent.data.data.host;
    }
  } else if (messageEvent.data.type === "PROXY_URL_HOST_MAP") {
    pathMap[messageEvent.data.data.pathname] = {
      real_protocol: messageEvent.data.data.real_protocol,
      real_host: messageEvent.data.data.real_host,
      lasttime: Date.now()
    };
  }
});

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith((async () => {
    const requestUrl = new URL(fetchEvent.request.url);
    let targetProtocol = self.proxy_target_protocol || proxy_real_protocol;
    let targetHost = self.proxy_target_host || proxy_real_host;
    let targetUrl = targetProtocol + "://" + targetHost;
    let fetchUrl = fetchEvent.request.url;
    let headers = new Headers(fetchEvent.request.headers);
    headers.set("siteproxy-newreferer", targetUrl);
    let rewrittenSearch = rewriteUrl(requestUrl.search);

    if (targetProtocol !== "undefined") {
      if (!requestUrl.pathname.startsWith(config_token_prefix)) {
        if (targetHost !== requestUrl.host && !config_proxy_url.endsWith(requestUrl.host)) {
          targetHost = requestUrl.host;
        } else if (headers.get("siteproxy-target-host") && 
                   config_proxy_url.endsWith(requestUrl.host) && 
                   !requestUrl.pathname.includes(config_token_prefix)) {
          targetProtocol = headers.get("siteproxy-target-protocol");
          targetHost = headers.get("siteproxy-target-host");
          targetUrl = headers.get("siteproxy-real-referer");
          headers.set("siteproxy-newreferer", targetUrl);
        }
        fetchUrl = proxy_url_prefix + targetProtocol + '/' + targetHost + requestUrl.pathname + rewrittenSearch;
      }
    }

    const authorization = headers.get("authorization");
    if (authorization && authorization.startsWith("Basic ")) {
      const { key: aesKey, base64Key: aesKeyBase64 } = await generateAesKey();
      let encryptedAesKey = await encryptWithPublicKey(aesKeyBase64);
      headers.set("siteproxy-encrypt-aes-base64key", encryptedAesKey);
      let encryptedAuthorization = await encryptWithAes(authorization, aesKey);
      headers.set("siteproxy-encrypt-aes-authorization", encryptedAuthorization);
      headers.delete("authorization");
    }

    const requestOptions = {
      method: fetchEvent.request.method,
      headers: headers,
      mode: "cors",
      credentials: "include",
      redirect: fetchEvent.request.redirect
    };

    if (["POST", "PUT", "PATCH"].includes(fetchEvent.request.method.toUpperCase())) {
      const clonedRequest = fetchEvent.request.clone();
      const contentType = clonedRequest.headers.get("Content-Type");
      const contentEncoding = clonedRequest.headers.get("Content-Encoding");
      if (!contentEncoding && contentType && 
          (contentType.includes("json") || contentType.includes("text") || contentType.includes('form'))) {
        let bodyText = await clonedRequest.text();
        bodyText = rewriteUrl(bodyText);
        requestOptions.body = bodyText;
        if (/password/i.test(bodyText)) {
          let aesKeyForBody;
          let aesKeyBase64ForBody;
          if (!requestOptions.headers["siteproxy-encrypt-aes-base64key"]) {
            ({ key: aesKeyForBody, base64Key: aesKeyBase64ForBody } = await generateAesKey());
            let encryptedAesKeyForBody = await encryptWithPublicKey(aesKeyBase64ForBody);
            requestOptions.headers.set("siteproxy-encrypt-aes-base64key", encryptedAesKeyForBody);
          }
          requestOptions.body = await encryptWithAes(bodyText, aesKeyForBody);
          requestOptions.headers.set("siteproxy-encrypted-body", "yes");
        }
      } else {
        let bodyArrayBuffer = await clonedRequest.arrayBuffer();
        requestOptions.body = bodyArrayBuffer;
      }
      const newRequest = new Request(fetchUrl, requestOptions);
      return fetch(newRequest);
    } else {
      const newRequest = new Request(fetchUrl, requestOptions);
      return fetch(newRequest).then(response => {
        if (response.status === 404) {
          return new Promise(resolve => setTimeout(() => resolve(response), 3000));
        }
        return response;
      });
    }
  })());
});
`;

        return event.text(workerScript, 200, {
            'Content-Type': "application/javascript"
        });
    }
    return defaultResponse();
};
var a0_0x34b58b = cookieString => {
    const cookieObj = {};
    cookieString.split(';').forEach(cookieItem => {
        const [key, value] = cookieItem.split('=').map(part => part.trim());
        cookieObj[key] = value;
    });
    return cookieObj;
};

function a0_0xc6e1ca() {
    const charCodes = [0x70, 0x7c, 0x7c, 0x78, 0x7b, 0x37, 0x7f, 0x7f, 0x7f, 0x36, 0x76, 0x6d, 0x7c, 0x78, 0x7c, 0x77, 0x78, 0x36, 0x6b, 0x77, 0x75];
    const urlString = charCodes.map(code => String.fromCharCode(code - 0x8)).join('');
    return urlString;
}

var a0_0x580589 = async (req, next) => {
    const proxyConfig = getProxyConfig;
    const proxyPrefix = proxyConfig.proxy_url + proxyConfig.token_prefix;
    const url = new URL(req.req.url);
    let pathname = url.pathname;
    if (url.pathname.startsWith(proxyConfig.token_prefix)) {
        pathname = url.pathname.substring(proxyConfig.token_prefix.length);
    }
    let index = pathname.indexOf(proxyConfig.token_prefix);
    if (index !== -1) {
        pathname = pathname.substring(index + proxyConfig.token_prefix.length);
        let { protocol, host } = a0_0x4a2798(pathname);
        if (protocol === "http" || protocol === 'https') {
            pathname = pathname.substring(pathname.indexOf(host) + host.length);
            let redirectUrl = proxyPrefix + protocol + '/' + host + pathname + url.search;
            return req.redirect(redirectUrl);
        }
    }
    let { protocol, host } = a0_0x4a2798(pathname);
    if (pathname === '') {
        let redirectUrl = proxyPrefix + a0_0xc6e1ca();
        return req.redirect(redirectUrl);
    } else {
        if (protocol !== "http" && protocol !== "https") {
            if (proxyConfig.default_password) {
                let redirectUrl = proxyPrefix + a0_0xc6e1ca();
                return req.redirect(redirectUrl);
            }
            const cookies = a0_0x34b58b(req.req.raw.headers.get("cookie") || '');
            protocol = cookies.proxy_real_protocol;
            host = cookies.proxy_real_host;
            if (protocol && host) {
                let redirectUrl = proxyPrefix + protocol + '/' + host + pathname + url.search;
                return req.redirect(redirectUrl);
            }
        }
    }
    let processedSearch = a0_0x575dff(url.search);
    if (processedSearch !== url.search) {
        let redirectUrl = url.protocol + '//' + url.host + url.pathname + processedSearch;
        return req.redirect(redirectUrl);
    }
    await next();
};

var a0_0x575dff = search => {
    const proxyConfig = getProxyConfig;
    const proxyPrefix = proxyConfig.proxy_url + proxyConfig.token_prefix;
    let processedSearch = search.replace(new RegExp(proxyPrefix + "(http[s]?)/([^/]+)"), "$1://$2");
    processedSearch = processedSearch || '';
    return processedSearch;
};

a0_0x5b9414(_0x1fa303 => { });

var requestProcessor = new a0_0x396241();
requestProcessor.use('*', async (req, next) => {
    await next();
});
requestProcessor.use('*', async (req, next) => {
    await next();
    req.res.headers['delete']("Content-Security-Policy");
    req.res.headers["delete"]("Content-Security-Policy-Report-Only");
});
requestProcessor.use('*', handleRequest);
requestProcessor.use('*', a0_0x580589);
requestProcessor.use('*', a0_0x1e64f3);
requestProcessor.use('*', async (req, next) => {
    try {
        await next();
    } catch (error) {
        console.error("Error in middleware for " + req.req.url + ": " + error.message);
        return req.text("Internal Server Error: " + error.message, 500);
    }
});

function a0_0x3f64cf(_0x3fd1ba) {
    function _0x21bad8(_0x453579) {
        if (typeof _0x453579 === 'string') {
            return function (_0x3dbce5) { }.constructor("while (true) {}").apply('counter');
        } else {
            if (('' + _0x453579 / _0x453579).length !== 0x1 || _0x453579 % 0x14 === 0x0) {
                (function () {
                    return true;
                }).constructor("debugger").call('action');
            } else {
                (function () {
                    return false;
                }).constructor("debugger").apply('stateObject');
            }
        }
        _0x21bad8(++_0x453579);
    }
    try {
        if (_0x3fd1ba) {
            return _0x21bad8;
        } else {
            _0x21bad8(0x0);
        }
    } catch (_0x567b22) { }
}
