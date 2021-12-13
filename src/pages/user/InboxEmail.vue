<template>
    <div class="q-ma-xl cf-body">
        <h4 class="cc-pri q-ma-none q-mb-lg cf-title">Inbox Email</h4>
        <div class="row q-mt-md q-mb-md">
            <q-list separator class="full-width">
               <q-item class="q-mt-md" clickable v-for="(item, index) in items" v-bind:key="`item${index}`">
                <q-item-section top avatar>
                  <q-avatar size="4rem" font-size="1.5rem" :class="item.avatar.class" :text-color="item.avatar.textColor" :icon="item.avatar.icon" />
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-h5">{{item.title}}</q-item-label>
                  <q-item-label caption lines="2">{{item.description}}</q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-icon :name="`${(item.starActive ? 'star' : 'star_border')}`" class="cc-pri" />
                </q-item-section>
              </q-item>
            </q-list>
        </div>
    </div>
</template>

<script>
export default {
    name: "InboxEmail",
    data() {
        return {
          items: [
            { avatar: { class: 'bg-cc-sec', icon: 'announcement', textColor: 'white' }, title: 'Cancelación de pedido', description: 'Texto secundario con un previo de lo que dice el mensaje completo', starActive: true},
            { avatar: { class: 'bg-cc-sec', icon: 'message', textColor: 'white' }, title: 'Confirmación de pedido', description: 'Texto secundario con un previo de lo que dice el mensaje completo', starActive: false},
            { avatar: { class: 'bg-cc-sec', icon: 'sms_failed', textColor: 'white' }, title: 'Devolución del pedido', description: 'Texto secundario con un previo de lo que dice el mensaje completo', starActive: true},
            { avatar: { class: 'bg-cc-sec', icon: 'message', textColor: 'white' }, title: 'Bienvenida por parte del equipo de COAST', description: 'Texto secundario con un previo de lo que dice el mensaje completo', starActive: false}
          ]
        }
    }
};
</script>

