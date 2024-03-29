const jwt = require("jsonwebtoken");
function getJWTKey() {
    return "V^EgthRj3rmFMsmj^SLe?p^Y8keAQqP74?6NpD_UPghr6F2Berj%6*32ESqMRD7kB=&%dZB?U5Js?!Ac-XMx97-rhrXQqEk6&d7T=khXPL8ZN%8NvbADgRj=T!!Be375_%=shdx4+y58B^2D?zpqS_XwFD^zHEf5A+v58^#hpWjB$*j2-MwYR3RDjRG_C@Kht$sDBz7utR%g#DKVM5Ha&sh2RXF3xmG$_sDfZ5Wcg%$96HLKq*XFbC&ZkEughr4ZHr$e!?&6#8rVEa=UdF4Ud#eTVDD@E6nzQ$mwY=AjLuwcdX+#GQg=-VR*bcMAGE^mrsspuq%g$Epmkmt6p!w@sJXhb-f$*FsUvaH#cC$aZ4Q!mX6vSMsXdGpLHzYJ!6mu=28UKu&pwCZD=jrRrwBP+3t*V+_CZ_mr3qd$VV=A+v^%_FYyJgy@T7vXq_AK&Gq%u8_xMzZbFsyfDMWQpSjpb_Q=pggaRC5R$Cbwc$P=E?FmqyHT#=_k^tQx$YB4@asCQam$?Q&qn!T@9bsgjS^WGP$my!MK#pHU74U*a92F&ZKR$EUB!T$r%-YxZCKYQmAm52xwd@ms4-P%JWKYcUCfJNHU!aVN9_kfe%W9yCR*zJsJzNNRcYumf9m5h8AES#@nTf_tb?gYDB5QEXZtwkftuMrh@DrtWqCpkEDyWbp57D_q-MXRfSKsS@gRHYR4E7R&uxptX?42e_gU%C?u_%_SS8^3!87Rw8?snmdxkqa3VPZQR%h%%2@H&jJb!nAE8ryfXB+2f5z*Ky6v?=NfT*3P7=Vy!etdsY6j^8v?kJ!$@FZShfzRNp5GG@Mve_J#Wr-b*W^fY3&gsnUN%f_p6jkFkF733vjhD#6PXqDU8P4s&SHxh9&@Au_$4ERV8FCVf9J_*Q+f!SBt^-TmcAmE&M%CwJv2==rq^ZZVBdb3&%s3*Dkak5a5SrQk@usUs!aRmE7fYv?dajRkP2Wj+9WkSfTVEDA5Q_%HKN-ND7agGUcd3^mbYqE*Yfedq@yFeJsT^7dwHhLN&HtMLE2XGbAgh#QXZ4utbvZt_#2LAqvLYzykHu_weAX55JW&YR@YLuXYG!byG!SjcGPqs6mwfUQfb5tty+F3q52her6Edub6JG6+-RZL@RYcwy=t^_*7^&V$qrDMV?TG7u_Kufb_r4h^Nzg4v6N$!*Y8axqKbd?zG4*$*B&G&P?KvHtTzJNa_Fp_SRR6$e3Ys%@C$2F!fkDs%W3m-LTYfU$3c&VeLYkkUnEpgt9kefPb-#%*gbn#^f4dzfUL?ju#b$EAwTY=pBy?33aQD_5He4$qy?jDs%GK&kWnsdmUwzJD7dTQuu@S^6$96wZVzGVNffEURj7G6uH-KEFG7bRV!HWxw_yhFeF*w?&L+qbc5N%4_H=uf$GzC@kf!qTTj+cdRTpYkcX?zXUEK2wCpTye86AGxJX7%ANFcb7S_@$*_Hk7%fTND2MX+?eX!qyp%H_EB4QY$qb_7*mwEza8q=dB*GjJgLGH9k?S_tj-8dnXGHM+4UPgnbs$c-C64CfbX9JqfHEpjNS_j#37dEN^+!CbAHw6a5G2x#UQ5q#Eps@j8F@^hH_hJhdW6jj7m#82kFD?rWyhvkx&&xRCm9+cxkvSv_&-q2J*X*ZJBprGX^R6p^6DGBz8fLPL9-H_-ATvb##T7mXf6PdE%K=n!zzUemzG7c#_+ws+26cZZ&YkcSb?X=s$k*6Q4EMw^F2!6-VWk=g&f4%8!*m_hP&MKa6a%99%76sKhtsCcR8E4?sDrnKeS8EYdtnyLAWtWrfGCr^xNhn9M4%n-8LY7UXdGKt?WHZRqjqn$eXJV&pm&-^7s*6GW8WxFhcL=fvE4SCELN*rHAdeM&PnnxK7P&dh#JL=Q@6Wa?cTDU-bpNsay-xnqh4MMf@8AeAazpDnExB@MTNmB7fp$dfDYHV#pPunVhN?vxkG3QTA6RD*$+2Shz%#_zZt+nb-*DArGUSbku&3EG6AU^@t#uP^yZA5j+AQ%QEtsAb+Z!HyF#adZX$V9$zZ6=+W7n@6KY?&Se8hAMx5VJ7_";
}

function getToken(user) {
    return jwt.sign(
        {
            userName: user.userName,
            designation: user.designation,
            rolesAllowed: user.rolesAllowed,
            modulesAllowed: user.modulesAllowed,
        },
        getJWTKey(),
        {
            expiresIn: "1h",
        }
    );
}

exports.getToken = getToken;
exports.getJWTKey = getJWTKey;