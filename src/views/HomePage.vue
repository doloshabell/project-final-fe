<template>
  <div class="flex flex-row w-full">
    <!-- Box 1 - Menu -->
    <div class="bg-[#FAFAFA] border-r border-[#D1D1D1] fixed w-48 h-full">
      <div class="px-5 my-5">
        <h1 class="font-bold text-xl">PROSPERA</h1>
        <h1 class="">Halo, Kantor Pusat</h1>
      </div>
      <div class="mt-10 px-2">
        <div :class="currentRouteName == 'home' ? 'mb-2 border-l-4 border-[#FF8000] rounded w-full hover:bg-[#F0F0F0] hover:rounded' : 'mb-2 w-full hover:bg-[#F0F0F0] hover:rounded'">
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline">
              <font-awesome-icon :icon="iconFaHouse" :class="currentRouteName == 'home' ? 'text-[#FF8000]' : 'text-[#6E6E6E]'" />
            </div>
            <span :class="currentRouteName == 'home' ? 'ml-[10px] text-[#6F6F6F] font-semibold' : 'ml-[10px] hover:text-[#4A4A4A]'">Home</span>
          </div>
        </div>
        <div class="mb-2 w-full hover:bg-[#F0F0F0] hover:rounded">
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline">
              <font-awesome-icon :icon="iconFaUserTie"  />
            </div>
            <span class="ml-[14px] hover:text-[#4A4A4A]">Branch Officer</span>
          </div>
        </div>
        <div class="mb-2 w-full hover:bg-[#F0F0F0] hover:rounded">
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon :icon="iconFaHandHoldingDollar"  />
            </div>
            <span class="ml-[10px] hover:text-[#4A4A4A]">Loans</span>
          </div>
        </div>
        <div class="mb-2 w-full hover:bg-[#F0F0F0] hover:rounded">
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon :icon="iconFaCircleDollarToSlot"  />
            </div>
            <span class="ml-[11px] hover:text-[#4A4A4A]">Savings</span>
          </div>
        </div>
        <div class="mb-2 w-full hover:bg-[#F0F0F0] hover:rounded">
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon :icon="iconFaUserGroup"  />
            </div>
            <span class="ml-[8px] hover:text-[#4A4A4A]">Customers</span>
          </div>
        </div>
        <div class="mb-2 w-full hover:bg-[#F0F0F0] hover:rounded">
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon :icon="iconFaRightFromBracket"  />
            </div>
            <span class="ml-[11px] hover:text-[#4A4A4A]">Logout</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Box 2 - Content -->
    <div class="pl-52 pt-10">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum iusto nihil eligendi quo aliquam animi minus non rem excepturi similique quas quidem nisi, consequuntur iste cumque eius? Hic at sint optio facere eos autem alias? Laboriosam tempora vero dignissimos consectetur minima exercitationem, ad voluptate cupiditate reprehenderit fugit at quisquam nihil! Aspernatur distinctio possimus ducimus esse nesciunt cupiditate quam, earum accusamus illo, laborum incidunt animi. Omnis magni ut iusto, illo quod aspernatur porro sit reprehenderit deleniti nesciunt pariatur rerum beatae architecto quidem ipsum suscipit ullam eius aut libero expedita rem dolore repellat. Rem consectetur error incidunt vel ex, velit saepe?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, explicabo aperiam porro incidunt iste veniam, saepe cum atque distinctio quasi fugiat totam rem beatae sunt earum molestiae sed at illum consectetur laudantium pariatur excepturi. Doloribus dicta neque laborum numquam nulla sapiente quasi exercitationem tempora tenetur pariatur, officiis, rem sint, sed maxime et nobis saepe sunt odit sequi quae aliquam aliquid. Labore magni officiis fuga dicta accusamus delectus quisquam sit earum nisi in atque laudantium cupiditate doloribus, dolorum recusandae! Voluptatum, doloribus neque. Placeat ipsum officiis ipsam. Saepe harum incidunt amet, totam quae reprehenderit fugit debitis quaerat asperiores non. Iure, laboriosam repudiandae.</h1>
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo explicabo sint a nemo eaque. Dignissimos quidem repellendus eos. Porro ipsam vitae delectus ea non suscipit soluta, sit laborum. Aliquid temporibus iusto sint deserunt quasi, exercitationem ducimus, itaque vero similique delectus explicabo distinctio? Harum, obcaecati minima provident velit dicta ipsum laborum nostrum repudiandae adipisci in eaque perferendis voluptas vero voluptates cupiditate voluptatum officiis nam, exercitationem explicabo dolore quae nobis. Nisi doloribus dolorum dolor sapiente accusamus deleniti eos, vel corrupti molestias repudiandae magni atque, in ea est velit blanditiis tempora quaerat provident tenetur omnis sed sunt laborum! Praesentium quam voluptate consectetur mollitia.</h1>
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem dolor qui laborum rem. Mollitia fuga ratione dolorum ipsam dolorem iure perspiciatis est explicabo tempore libero suscipit eaque illo quisquam pariatur assumenda vitae, reprehenderit, tenetur facilis quo doloribus, optio atque. Fuga doloremque nobis molestias necessitatibus nostrum voluptatum facilis, tenetur corporis nisi enim qui incidunt amet deserunt quod iure totam laudantium! Enim placeat magnam illum veniam optio quos, itaque eveniet praesentium! Porro sit dolorem quasi? Debitis alias voluptate illo adipisci tempora aspernatur rem id. Debitis dolorum exercitationem unde consequatur ea animi laborum. Placeat dolorum corrupti quasi. Expedita qui praesentium consequuntur. Necessitatibus.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto! Architecto quos esse delectus vero nobis ab similique ipsa, velit nisi enim dolorem itaque, reiciendis, dignissimos ratione est a deserunt ipsum mollitia ducimus! Maxime magni quidem odit asperiores laudantium deserunt tempore eius pariatur quas? Veritatis illo fuga hic autem consectetur reprehenderit officia magni. Ut esse saepe repellendus provident quaerat, iusto eligendi eaque similique tenetur quidem veniam ipsa quo modi neque reiciendis sit iste! Fugiat reprehenderit dolore sit aspernatur placeat nostrum ab nam est laboriosam voluptas officiis beatae a consectetur, id quam voluptatem consequuntur at ducimus cumque recusandae? Tempore, rerum unde?</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In consequuntur iure qui vero adipisci totam autem vitae debitis possimus perferendis! Soluta accusantium voluptatum voluptatem ea ipsa. Accusantium eos ipsum temporibus, vero culpa sunt accusamus molestiae tempora nulla distinctio! Consequuntur, eveniet cum animi id cumque, iusto autem aliquid eaque libero atque in qui sequi eum possimus odio veritatis consectetur! Vel odit maiores labore doloribus debitis quia. Recusandae dolor quibusdam distinctio suscipit neque modi numquam aliquid ut, necessitatibus ducimus dolores quis hic magni, iure a dicta voluptates blanditiis? Natus aperiam quas vitae architecto voluptates officiis, provident quasi magnam ex! Architecto, explicabo quia!</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi provident dicta in quasi, eveniet dolore repellat debitis sed necessitatibus praesentium error sunt. Excepturi inventore vero iure delectus earum ipsum, maxime iste facere illo officia officiis veniam laboriosam dolores numquam autem blanditiis nesciunt repellendus voluptatem repudiandae eos. Libero nisi, consequatur, illum voluptatum ut excepturi possimus id dolores ipsam iste fuga voluptatem? Quia ut voluptatem impedit nostrum sapiente accusantium. Vitae dolores, modi fugit, autem libero veritatis dolorem accusamus maiores asperiores perspiciatis suscipit, magnam molestiae. Explicabo, aperiam nobis doloribus voluptatem ad omnis quam laborum dignissimos pariatur, alias earum saepe, praesentium accusamus nesciunt quos?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at nesciunt et, repellendus neque, consequuntur quos eos, deserunt ipsa minus autem. Aliquid asperiores necessitatibus molestiae rerum nam facilis in corporis suscipit tenetur repellat aperiam provident, autem sequi consequuntur eligendi sapiente earum omnis error officiis eos. Tenetur minima minus beatae repellendus! Quidem, cupiditate expedita tenetur ipsa vel unde, hic aliquam magnam nisi voluptas at odit, error consequuntur culpa impedit libero omnis! Animi laboriosam aliquam culpa rem saepe amet sequi ipsam consequatur, architecto ex similique quod praesentium repellat! Velit animi, voluptate atque laborum eum a accusamus. Quam sapiente numquam rem nesciunt eius!</h1>
    </div>
  </div>
</template>

<script>
import { faCircleDollarToSlot, faHandHoldingDollar, faHouse, faRightFromBracket, faUserTie, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default {
  name: "HomePage",
  computed: {
    currentRouteName() {
        return this.$route.name;
    },
    iconFaCircleDollarToSlot() {
      return faCircleDollarToSlot;
    },
    iconFaHandHoldingDollar() {
      return faHandHoldingDollar;
    },
    iconFaHouse() {
      return faHouse;
    },
    iconFaRightFromBracket() {
      return faRightFromBracket
    },
    iconFaUserGroup() {
      return faUserGroup;
    },
    iconFaUserTie() {
      return faUserTie;
    },
  }
};
</script>
