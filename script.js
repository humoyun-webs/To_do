let form = document.querySelector('.form')
let input = document.querySelector('.input');
let add = document.querySelector('.btn');
let plan = document.querySelector('.plan');
let wrapper = document.querySelector('.wrapper')


form.addEventListener('submit', (e) => {
    e.preventDefault();//refresh bolib ketmasligi uchun
    if (!input.value.trim()) {
        alert('Add Plan')
        //agar bosh bolsa qabul qilmaydi

    } else {
        const plans = document.createElement("div");
        const plan = document.createElement("input");
        const opt = document.createElement("div");
        const edit = document.createElement("button");
        const dell = document.createElement("button");
        //element yaratib oldim 

        wrapper.appendChild(plans)
        plans.appendChild(plan)
        plans.appendChild(opt)
        opt.appendChild(edit)
        opt.appendChild(dell)
        //elementlarni parent child qilib chiqdim


        plans.classList.add('plans')
        plan.classList.add('plan')
        edit.classList.add("edit")
        edit.classList.add("btn2")
        dell.classList.add('dell')
        dell.classList.add('btn2')
        opt.classList.add('opt')
        //elementlarga class berib chiqdi,


        edit.innerText = "Edit";
        dell.innerText = "delete";
        //buttonlarga yozuv yozdim 


        plan.value = input.value//inputdan kelgan xabarni planga  yozib oldim
        plan.setAttribute("readonly", "readonly")//planni ozgartira olmaslik uchun
        input.value = " " //inputda xabar qolib ketmasligi uchun

        edit.addEventListener('click', (e) => {//edit tugmasi bosilganda
            plan.removeAttribute("readonly", "readonly") //ozgartirish uchun readonly atributini olib tashladim
            plan.focus();
            edit.innerText = "save" //edit save ga ozgarishi uchun
            plan.addEventListener('click', (e) => {
                plan.focus()
            })
            if (!plan.value) {//plan ni valuesi yoq bolsa
                alert('Your plan has been deleted');
                plans.remove()
                plan.remove()
                edit.remove()
                dell.remove()//agar plandagi hamma narsani o'chirib yuborsa shu plan ochib ketadi bosh qolib ketmaydi
            } else {
                if (edit.innerText.toLowerCase() == "save") {//agar edit buttonni inner texti savega teng bolsa
                    edit.addEventListener('click', (e) => {
                        plan.setAttribute("readonly", "readonly")
                        edit.innerText = "Edit";
                        //plan inputi readonly bolib qoladi va edit button o'z holiga qaytadi

                        plan.addEventListener('click', (e) => {
                            plan.blur()
                        })
                    })
                }
            }
        })
        dell.addEventListener('click', (e) => {
            plans.remove()
            plan.remove()
            edit.remove()
            dell.remove()
            //delete button bosilganda reja o'chib ketadi
        })
        plan.addEventListener('click', (e) => {
            plan.blur()//plan inputi posilganda focus bolmasligi uchun
        })
    }

})
   //You can do it :)

                              